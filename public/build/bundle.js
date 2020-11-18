
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    function flush() {
        const seen_callbacks = new Set();
        do {
            // first, call beforeUpdate functions
            // and update components
            while (dirty_components.length) {
                const component = dirty_components.shift();
                set_current_component(component);
                update(component.$$);
            }
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    callback();
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, value = ret) => {
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(children(options.target));
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, detail));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev("SvelteDOMSetData", { node: text, data });
        text.data = data;
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
    }

    /* src/Components/Navbar/Navbar.svelte generated by Svelte v3.16.7 */

    const file = "src/Components/Navbar/Navbar.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	return child_ctx;
    }

    // (75:6) {#each navlists as list}
    function create_each_block(ctx) {
    	let li;
    	let t0_value = /*list*/ ctx[4].title + "";
    	let t0;
    	let t1;
    	let li_name_value;
    	let li_aria_label_value;
    	let dispose;

    	const block = {
    		c: function create() {
    			li = element("li");
    			t0 = text(t0_value);
    			t1 = space();
    			attr_dev(li, "class", "navbar-item link svelte-1vkexb");
    			attr_dev(li, "name", li_name_value = /*list*/ ctx[4].title);
    			attr_dev(li, "tabindex", "0");
    			attr_dev(li, "role", "link");
    			attr_dev(li, "aria-label", li_aria_label_value = "Link to " + /*list*/ ctx[4].title + " section");
    			add_location(li, file, 75, 8, 1649);

    			dispose = [
    				listen_dev(li, "click", /*linkScroll*/ ctx[1], false, false, false),
    				listen_dev(li, "keyup", /*linkScrollFocus*/ ctx[2], false, false, false)
    			];
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			append_dev(li, t0);
    			append_dev(li, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*navlists*/ 1 && t0_value !== (t0_value = /*list*/ ctx[4].title + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*navlists*/ 1 && li_name_value !== (li_name_value = /*list*/ ctx[4].title)) {
    				attr_dev(li, "name", li_name_value);
    			}

    			if (dirty & /*navlists*/ 1 && li_aria_label_value !== (li_aria_label_value = "Link to " + /*list*/ ctx[4].title + " section")) {
    				attr_dev(li, "aria-label", li_aria_label_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li);
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(75:6) {#each navlists as list}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let section;
    	let nav;
    	let ul;
    	let each_value = /*navlists*/ ctx[0];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			section = element("section");
    			nav = element("nav");
    			ul = element("ul");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(ul, "class", "navbar-list svelte-1vkexb");
    			add_location(ul, file, 73, 4, 1585);
    			attr_dev(nav, "class", "navbar svelte-1vkexb");
    			add_location(nav, file, 72, 2, 1560);
    			attr_dev(section, "id", "nav-bar");
    			add_location(section, file, 71, 0, 1535);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);
    			append_dev(section, nav);
    			append_dev(nav, ul);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ul, null);
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*navlists, linkScroll, linkScrollFocus*/ 7) {
    				each_value = /*navlists*/ ctx[0];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(ul, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { navlists = [] } = $$props;
    	const navLinks = document.querySelectorAll(".navbar-item");

    	const linkScroll = e => {
    		const scrollTrigger = e.target.getAttribute("name");
    		const scrollTarget = document.getElementById(scrollTrigger);
    		scrollTarget.scrollIntoView({ behavior: "smooth" });
    	};

    	const linkScrollFocus = e => {
    		if (e.keyCode === 13) {
    			e.preventDefault();
    			e.target.click();

    			setTimeout(
    				function () {
    					const scrollTrigger = e.target.getAttribute("name");
    					const scrollTarget = document.getElementById(scrollTrigger);
    					scrollTarget.querySelector("[tabindex], a, input, textarea").focus();
    				},
    				700
    			);
    		}
    	};

    	const writable_props = ["navlists"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Navbar> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("navlists" in $$props) $$invalidate(0, navlists = $$props.navlists);
    	};

    	$$self.$capture_state = () => {
    		return { navlists };
    	};

    	$$self.$inject_state = $$props => {
    		if ("navlists" in $$props) $$invalidate(0, navlists = $$props.navlists);
    	};

    	return [navlists, linkScroll, linkScrollFocus];
    }

    class Navbar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, { navlists: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Navbar",
    			options,
    			id: create_fragment.name
    		});
    	}

    	get navlists() {
    		throw new Error("<Navbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set navlists(value) {
    		throw new Error("<Navbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Components/Banner/Banner.svelte generated by Svelte v3.16.7 */

    const file$1 = "src/Components/Banner/Banner.svelte";

    function create_fragment$1(ctx) {
    	let section;
    	let h1;
    	let t1;
    	let div;
    	let p;

    	const block = {
    		c: function create() {
    			section = element("section");
    			h1 = element("h1");
    			h1.textContent = `${/*HEADING*/ ctx[0]}`;
    			t1 = space();
    			div = element("div");
    			p = element("p");
    			p.textContent = `${/*DECRIPTION*/ ctx[1]}`;
    			attr_dev(h1, "class", "hero-headline svelte-tlebkh");
    			add_location(h1, file$1, 58, 2, 1133);
    			add_location(p, file$1, 60, 4, 1204);
    			attr_dev(div, "class", "hero-copy svelte-tlebkh");
    			add_location(div, file$1, 59, 2, 1176);
    			attr_dev(section, "class", "hero svelte-tlebkh");
    			add_location(section, file$1, 57, 0, 1108);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);
    			append_dev(section, h1);
    			append_dev(section, t1);
    			append_dev(section, div);
    			append_dev(div, p);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { bannerData = {} } = $$props;
    	const { HEADING, DECRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
    	const writable_props = ["bannerData"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Banner> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("bannerData" in $$props) $$invalidate(2, bannerData = $$props.bannerData);
    	};

    	$$self.$capture_state = () => {
    		return { bannerData };
    	};

    	$$self.$inject_state = $$props => {
    		if ("bannerData" in $$props) $$invalidate(2, bannerData = $$props.bannerData);
    	};

    	return [HEADING, DECRIPTION, bannerData];
    }

    class Banner extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { bannerData: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Banner",
    			options,
    			id: create_fragment$1.name
    		});
    	}

    	get bannerData() {
    		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set bannerData(value) {
    		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Components/About/About.svelte generated by Svelte v3.16.7 */

    const file$2 = "src/Components/About/About.svelte";

    function create_fragment$2(ctx) {
    	let section;
    	let img;
    	let img_src_value;
    	let t0;
    	let h2;
    	let t2;
    	let p;
    	let t4;
    	let blockquote;
    	let em;

    	const block = {
    		c: function create() {
    			section = element("section");
    			img = element("img");
    			t0 = space();
    			h2 = element("h2");
    			h2.textContent = `${/*HEADING*/ ctx[0]}`;
    			t2 = space();
    			p = element("p");
    			p.textContent = `${/*DESCRIPTION*/ ctx[2]}`;
    			t4 = space();
    			blockquote = element("blockquote");
    			em = element("em");
    			em.textContent = `${/*QUOTE*/ ctx[3]} — ${/*BYLINE*/ ctx[4]}`;
    			if (img.src !== (img_src_value = /*IMAGE_URL*/ ctx[1])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "class", "headshot scalers svelte-1p0rs6a");
    			attr_dev(img, "alt", "charlie_baez");
    			add_location(img, file$2, 36, 2, 776);
    			attr_dev(h2, "class", "fade-ins");
    			add_location(h2, file$2, 37, 2, 846);
    			attr_dev(p, "class", "fade-ins svelte-1p0rs6a");
    			add_location(p, file$2, 38, 2, 884);
    			add_location(em, file$2, 40, 4, 958);
    			attr_dev(blockquote, "class", "fade-ins svelte-1p0rs6a");
    			add_location(blockquote, file$2, 39, 2, 924);
    			attr_dev(section, "class", "about svelte-1p0rs6a");
    			attr_dev(section, "id", "about");
    			add_location(section, file$2, 35, 0, 739);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);
    			append_dev(section, img);
    			append_dev(section, t0);
    			append_dev(section, h2);
    			append_dev(section, t2);
    			append_dev(section, p);
    			append_dev(section, t4);
    			append_dev(section, blockquote);
    			append_dev(blockquote, em);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { aboutData = {} } = $$props;
    	const { HEADING, TITLE, IMAGE_URL, DESCRIPTION, QUOTE, BYLINE } = aboutData;
    	const writable_props = ["aboutData"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("aboutData" in $$props) $$invalidate(5, aboutData = $$props.aboutData);
    	};

    	$$self.$capture_state = () => {
    		return { aboutData };
    	};

    	$$self.$inject_state = $$props => {
    		if ("aboutData" in $$props) $$invalidate(5, aboutData = $$props.aboutData);
    	};

    	return [HEADING, IMAGE_URL, DESCRIPTION, QUOTE, BYLINE, aboutData];
    }

    class About extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { aboutData: 5 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "About",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get aboutData() {
    		throw new Error("<About>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set aboutData(value) {
    		throw new Error("<About>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Components/WorkGrid/WorkGrid.svelte generated by Svelte v3.16.7 */

    const file$3 = "src/Components/WorkGrid/WorkGrid.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i];
    	return child_ctx;
    }

    // (105:4) {#each WORKGRID_LIST as work}
    function create_each_block$1(ctx) {
    	let div;
    	let h3;
    	let a;
    	let t0_value = /*work*/ ctx[3].project + "";
    	let t0;
    	let a_href_value;
    	let t1;
    	let p0;
    	let t2_value = /*work*/ ctx[3].description + "";
    	let t2;
    	let t3;
    	let p1;
    	let em;
    	let t4_value = /*work*/ ctx[3].tools + "";
    	let t4;
    	let t5;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h3 = element("h3");
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			p0 = element("p");
    			t2 = text(t2_value);
    			t3 = space();
    			p1 = element("p");
    			em = element("em");
    			t4 = text(t4_value);
    			t5 = space();
    			attr_dev(a, "tabindex", "0");
    			attr_dev(a, "href", a_href_value = /*work*/ ctx[3].url);
    			attr_dev(a, "target", "_blank");
    			attr_dev(a, "class", "link svelte-1fuaq60");
    			add_location(a, file$3, 107, 10, 2364);
    			attr_dev(h3, "class", "svelte-1fuaq60");
    			add_location(h3, file$3, 106, 8, 2349);
    			attr_dev(p0, "class", "svelte-1fuaq60");
    			add_location(p0, file$3, 111, 8, 2490);
    			add_location(em, file$3, 113, 10, 2538);
    			attr_dev(p1, "class", "svelte-1fuaq60");
    			add_location(p1, file$3, 112, 8, 2524);
    			attr_dev(div, "class", "work-projects svelte-1fuaq60");
    			add_location(div, file$3, 105, 6, 2313);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h3);
    			append_dev(h3, a);
    			append_dev(a, t0);
    			append_dev(div, t1);
    			append_dev(div, p0);
    			append_dev(p0, t2);
    			append_dev(div, t3);
    			append_dev(div, p1);
    			append_dev(p1, em);
    			append_dev(em, t4);
    			append_dev(div, t5);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(105:4) {#each WORKGRID_LIST as work}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let section;
    	let h2;
    	let t1;
    	let div0;
    	let t2;
    	let div1;
    	let t3;
    	let a;
    	let t5;
    	let each_value = /*WORKGRID_LIST*/ ctx[0];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			section = element("section");
    			h2 = element("h2");
    			h2.textContent = "work";
    			t1 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			div1 = element("div");
    			t3 = text("checkout my\n    ");
    			a = element("a");
    			a.textContent = "CodePen";
    			t5 = text("\n    where I sketch out ideas for personal and professional projects");
    			add_location(h2, file$3, 102, 2, 2233);
    			attr_dev(div0, "class", "work-grid svelte-1fuaq60");
    			add_location(div0, file$3, 103, 2, 2249);
    			attr_dev(a, "href", "https://codepen.io/RasterWolf");
    			attr_dev(a, "target", "_blank");
    			attr_dev(a, "class", "link svelte-1fuaq60");
    			add_location(a, file$3, 120, 4, 2661);
    			attr_dev(div1, "class", "work-cta fade-ins svelte-1fuaq60");
    			add_location(div1, file$3, 118, 2, 2609);
    			attr_dev(section, "class", "work svelte-1fuaq60");
    			attr_dev(section, "id", "work");
    			add_location(section, file$3, 101, 0, 2198);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);
    			append_dev(section, h2);
    			append_dev(section, t1);
    			append_dev(section, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}

    			append_dev(section, t2);
    			append_dev(section, div1);
    			append_dev(div1, t3);
    			append_dev(div1, a);
    			append_dev(div1, t5);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*WORKGRID_LIST*/ 1) {
    				each_value = /*WORKGRID_LIST*/ ctx[0];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div0, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { workData = {} } = $$props;
    	const { HEADING, WORKGRID_LIST } = workData;
    	const writable_props = ["workData"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<WorkGrid> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("workData" in $$props) $$invalidate(1, workData = $$props.workData);
    	};

    	$$self.$capture_state = () => {
    		return { workData };
    	};

    	$$self.$inject_state = $$props => {
    		if ("workData" in $$props) $$invalidate(1, workData = $$props.workData);
    	};

    	return [WORKGRID_LIST, workData];
    }

    class WorkGrid extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { workData: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "WorkGrid",
    			options,
    			id: create_fragment$3.name
    		});
    	}

    	get workData() {
    		throw new Error("<WorkGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set workData(value) {
    		throw new Error("<WorkGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Components/Contact/Contact.svelte generated by Svelte v3.16.7 */

    const file$4 = "src/Components/Contact/Contact.svelte";

    function create_fragment$4(ctx) {
    	let section;
    	let h2;
    	let t1;
    	let div;
    	let t2;
    	let form;
    	let input0;
    	let t3;
    	let input1;
    	let t4;
    	let textarea;
    	let t5;
    	let button;
    	let dispose;

    	const block = {
    		c: function create() {
    			section = element("section");
    			h2 = element("h2");
    			h2.textContent = "contact me";
    			t1 = space();
    			div = element("div");
    			t2 = space();
    			form = element("form");
    			input0 = element("input");
    			t3 = space();
    			input1 = element("input");
    			t4 = space();
    			textarea = element("textarea");
    			t5 = space();
    			button = element("button");
    			button.textContent = "send";
    			attr_dev(h2, "class", "fade-ins");
    			add_location(h2, file$4, 141, 2, 3918);
    			attr_dev(div, "id", "form-messages");
    			attr_dev(div, "class", "messages");
    			add_location(div, file$4, 142, 2, 3957);
    			input0.required = true;
    			attr_dev(input0, "type", "text");
    			attr_dev(input0, "id", "name");
    			attr_dev(input0, "name", "name");
    			attr_dev(input0, "placeholder", "name");
    			attr_dev(input0, "autocomplete", "off");
    			attr_dev(input0, "class", "svelte-ks6ikv");
    			add_location(input0, file$4, 144, 4, 4077);
    			input1.required = true;
    			attr_dev(input1, "type", "email");
    			attr_dev(input1, "id", "email");
    			attr_dev(input1, "name", "email");
    			attr_dev(input1, "placeholder", "email");
    			attr_dev(input1, "autocomplete", "off");
    			attr_dev(input1, "class", "svelte-ks6ikv");
    			add_location(input1, file$4, 151, 4, 4208);
    			attr_dev(textarea, "name", "message");
    			attr_dev(textarea, "type", "text");
    			attr_dev(textarea, "id", "message");
    			attr_dev(textarea, "rows", "6");
    			attr_dev(textarea, "placeholder", "message");
    			attr_dev(textarea, "class", "svelte-ks6ikv");
    			add_location(textarea, file$4, 158, 4, 4343);
    			attr_dev(button, "class", "button svelte-ks6ikv");
    			attr_dev(button, "type", "submit");
    			button.value = "submit";
    			add_location(button, file$4, 164, 4, 4461);
    			attr_dev(form, "class", "form fade-ins svelte-ks6ikv");
    			attr_dev(form, "id", "ajax-contact");
    			add_location(form, file$4, 143, 2, 4003);
    			attr_dev(section, "class", "contact-form svelte-ks6ikv");
    			attr_dev(section, "id", "contact");
    			add_location(section, file$4, 140, 0, 3872);
    			dispose = listen_dev(form, "submit", /*formSubmit*/ ctx[0], false, false, false);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);
    			append_dev(section, h2);
    			append_dev(section, t1);
    			append_dev(section, div);
    			append_dev(section, t2);
    			append_dev(section, form);
    			append_dev(form, input0);
    			append_dev(form, t3);
    			append_dev(form, input1);
    			append_dev(form, t4);
    			append_dev(form, textarea);
    			append_dev(form, t5);
    			append_dev(form, button);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self) {
    	const formSubmit = e => {
    		event.preventDefault();

    		fetch(e.target.getAttribute("action"), {
    			method: "POST",
    			body: new FormData(event.target)
    		}).then(function (response) {
    			if (response.ok) {
    				console.log("message sent");
    			}

    			return Promise.reject(response);
    		}).then(function (data) {
    			console.log(data);
    		}).catch(function (error) {
    			console.warn(error);
    		});
    	};

    	$$self.$capture_state = () => {
    		return {};
    	};

    	$$self.$inject_state = $$props => {
    		
    	};

    	return [formSubmit];
    }

    class Contact extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Contact",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    /* src/Components/Footer/Footer.svelte generated by Svelte v3.16.7 */

    const file$5 = "src/Components/Footer/Footer.svelte";

    function create_fragment$5(ctx) {
    	let section;
    	let img;
    	let img_src_value;
    	let t0;
    	let div5;
    	let div4;
    	let div1;
    	let div0;
    	let t1;
    	let t2;
    	let p0;
    	let t4;
    	let div2;
    	let p1;
    	let t6;
    	let p2;
    	let i0;
    	let t7;
    	let t8;
    	let t9;
    	let p3;
    	let i1;
    	let t10;
    	let t11;
    	let t12;
    	let p4;
    	let i2;
    	let t13;
    	let t14;
    	let t15;
    	let div3;
    	let p5;
    	let t17;
    	let input;
    	let t18;
    	let button;

    	const block = {
    		c: function create() {
    			section = element("section");
    			img = element("img");
    			t0 = space();
    			div5 = element("div");
    			div4 = element("div");
    			div1 = element("div");
    			div0 = element("div");
    			t1 = text(/*header*/ ctx[0]);
    			t2 = space();
    			p0 = element("p");
    			p0.textContent = `${/*DESCRIPTION*/ ctx[1]}`;
    			t4 = space();
    			div2 = element("div");
    			p1 = element("p");
    			p1.textContent = `${/*HEADING*/ ctx[4]}`;
    			t6 = space();
    			p2 = element("p");
    			i0 = element("i");
    			t7 = space();
    			t8 = text(/*ADDRESS*/ ctx[5]);
    			t9 = space();
    			p3 = element("p");
    			i1 = element("i");
    			t10 = space();
    			t11 = text(/*MOBILE*/ ctx[6]);
    			t12 = space();
    			p4 = element("p");
    			i2 = element("i");
    			t13 = space();
    			t14 = text(/*EMAIL*/ ctx[7]);
    			t15 = space();
    			div3 = element("div");
    			p5 = element("p");
    			p5.textContent = `${/*SUBSCRIBE_NEWSLETTER*/ ctx[2]}`;
    			t17 = space();
    			input = element("input");
    			t18 = space();
    			button = element("button");
    			button.textContent = `${/*SUBSCRIBE*/ ctx[3]}`;
    			if (img.src !== (img_src_value = "images/wave2.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "");
    			attr_dev(img, "class", "wave-img svelte-9trpfq");
    			add_location(img, file$5, 16, 2, 445);
    			attr_dev(div0, "class", "company_brand");
    			add_location(div0, file$5, 20, 8, 609);
    			add_location(p0, file$5, 21, 8, 659);
    			attr_dev(div1, "class", "col-md-4 footer-box");
    			add_location(div1, file$5, 19, 6, 567);
    			attr_dev(p1, "class", "footer-title svelte-9trpfq");
    			add_location(p1, file$5, 24, 8, 741);
    			attr_dev(i0, "class", "fas fa-map-marker-alt");
    			add_location(i0, file$5, 26, 10, 801);
    			add_location(p2, file$5, 25, 8, 787);
    			attr_dev(i1, "class", "fas fa-phone");
    			add_location(i1, file$5, 30, 10, 892);
    			add_location(p3, file$5, 29, 8, 878);
    			attr_dev(i2, "class", "fas fa-envelope");
    			add_location(i2, file$5, 34, 10, 973);
    			add_location(p4, file$5, 33, 8, 959);
    			attr_dev(div2, "class", "col-md-4 footer-box");
    			add_location(div2, file$5, 23, 6, 699);
    			attr_dev(p5, "class", "footer-title svelte-9trpfq");
    			add_location(p5, file$5, 39, 8, 1095);
    			attr_dev(input, "type", "email");
    			attr_dev(input, "class", "form-control round-border svelte-9trpfq");
    			attr_dev(input, "placeholder", "Your Email");
    			add_location(input, file$5, 40, 8, 1154);
    			attr_dev(button, "type", "button");
    			attr_dev(button, "class", "btn btn-outline-light round-border svelte-9trpfq");
    			add_location(button, file$5, 44, 8, 1274);
    			attr_dev(div3, "class", "col-md-4 footer-box svelte-9trpfq");
    			add_location(div3, file$5, 38, 6, 1053);
    			attr_dev(div4, "class", "row section-body");
    			add_location(div4, file$5, 18, 4, 530);
    			attr_dev(div5, "class", "container");
    			add_location(div5, file$5, 17, 2, 502);
    			attr_dev(section, "class", "main-bgcolor light-color");
    			attr_dev(section, "id", "footer");
    			add_location(section, file$5, 15, 0, 388);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);
    			append_dev(section, img);
    			append_dev(section, t0);
    			append_dev(section, div5);
    			append_dev(div5, div4);
    			append_dev(div4, div1);
    			append_dev(div1, div0);
    			append_dev(div0, t1);
    			append_dev(div1, t2);
    			append_dev(div1, p0);
    			append_dev(div4, t4);
    			append_dev(div4, div2);
    			append_dev(div2, p1);
    			append_dev(div2, t6);
    			append_dev(div2, p2);
    			append_dev(p2, i0);
    			append_dev(p2, t7);
    			append_dev(p2, t8);
    			append_dev(div2, t9);
    			append_dev(div2, p3);
    			append_dev(p3, i1);
    			append_dev(p3, t10);
    			append_dev(p3, t11);
    			append_dev(div2, t12);
    			append_dev(div2, p4);
    			append_dev(p4, i2);
    			append_dev(p4, t13);
    			append_dev(p4, t14);
    			append_dev(div4, t15);
    			append_dev(div4, div3);
    			append_dev(div3, p5);
    			append_dev(div3, t17);
    			append_dev(div3, input);
    			append_dev(div3, t18);
    			append_dev(div3, button);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*header*/ 1) set_data_dev(t1, /*header*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { footerData = {} } = $$props;
    	let { header = "" } = $$props;
    	const { DESCRIPTION, CONTACT_DETAILS, SUBSCRIBE_NEWSLETTER, SUBSCRIBE } = footerData;
    	const { HEADING, ADDRESS, MOBILE, EMAIL } = CONTACT_DETAILS;
    	const writable_props = ["footerData", "header"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Footer> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("footerData" in $$props) $$invalidate(8, footerData = $$props.footerData);
    		if ("header" in $$props) $$invalidate(0, header = $$props.header);
    	};

    	$$self.$capture_state = () => {
    		return { footerData, header };
    	};

    	$$self.$inject_state = $$props => {
    		if ("footerData" in $$props) $$invalidate(8, footerData = $$props.footerData);
    		if ("header" in $$props) $$invalidate(0, header = $$props.header);
    	};

    	return [
    		header,
    		DESCRIPTION,
    		SUBSCRIBE_NEWSLETTER,
    		SUBSCRIBE,
    		HEADING,
    		ADDRESS,
    		MOBILE,
    		EMAIL,
    		footerData
    	];
    }

    class Footer extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, { footerData: 8, header: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Footer",
    			options,
    			id: create_fragment$5.name
    		});
    	}

    	get footerData() {
    		throw new Error("<Footer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set footerData(value) {
    		throw new Error("<Footer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get header() {
    		throw new Error("<Footer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set header(value) {
    		throw new Error("<Footer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    const NAVBAR_DATA = [
    	{ id: 1, url: '#about', title: 'about', tabIndex: 1 },
    	{ id: 2, url: '#work', title: 'work', tabIndex: 2 },
    	{ id: 3, url: '#contact', title: 'contact', tabIndex: 3 },
    ];
    const BANNER_DATA = {
    	HEADING: 'Charlie Baez Does Web Stuff',
    	DECRIPTION: '...hace bien',
    };

    const ABOUT_DATA = {
    	HEADING: 'hola',
    	IMAGE_URL: '/images/selfie_gray_glasses.png',
    	DESCRIPTION:
    		'I am a developer with a focus in UI, Motion Design, UX and Accessibility. I utilize a variety of tools including Javascript, modern js frameworks (Svelte, React, and Gatsby), GraphQL, a11y Web Standards and more to build engaging, immersive, and accessible user experiences. I love learning and exploring this ever evolving digital landscape.',
    	QUOTE: '"Somewhere, something incredible is waiting to be known."',
    	BYLINE: 'Carl Sagan',
    };
    const WORKGRID_DATA = {
    	HEADING: 'work',
    	WORKGRID_LIST: [
    		{
    			url: 'https://wwex.com/',
    			project: 'World Wide Express',
    			description:
    				'website resdesign and development. Because of budget and time constraints, we concentrated on theming and flexibility of limited components',
    			tools: 'SASS | jQuery | Green Sock | Bootstrap | Nunjucks',
    		},
    		{
    			url: 'https://expensivo.netlify.app/',
    			project: '¡Expensivo!',
    			description:
    				'Budget Calculator App. This was a personal Project to learn SvelteJs',
    			tools: 'Svelte | Rollup | CSS Custom Properties | Netlify',
    		},
    		{
    			url: 'https://edc-static.netlify.app',
    			project: 'Entrust Data Card',
    			description:
    				'website resdesign and development. The link leads to a static style guide not the production sight. This was used for dev and design to interogate the components in realtime.',
    			tools: 'SASS | jQuery | Custom SVG Library | Bootstrap | Nunjucks',
    		},
    		{
    			url: 'https://www.milwaukeetool.com/Innovations/m12',
    			project: 'Milwaukee Tool',
    			description:
    				'website and app development for Milwaukee Tool brand update; heavy work on animations and interactivity',
    			tools: 'SASS | jQuery | Green Sock | Bootstrap',
    		},
    		{
    			url: 'https://www.bremer.com',
    			project: 'Bremer \n Bank',
    			description:
    				'website and app development for Bremer Bank re-branding. A major part of the project was an accessibility audit and compliance development',
    			tools: 'SASS | jQuery | React | Bootstrap | Nunjucks',
    		},
    		{
    			url: 'https://estimate-calculator-fed.baezcharliew.now.sh/',
    			project: 'Task Based Estimator',
    			description:
    				'A prototype for a task based estimator for Project Managers',
    			tools: 'SASS | React | Reactstrap | NextJs',
    		},
    	],
    };

    const FOOTER_DATA = {
    	DESCRIPTION:
    		'We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.',
    	CONTACT_DETAILS: {
    		HEADING: 'Contact us',
    		ADDRESS: 'La trobe street docklands, Melbourne',
    		MOBILE: '+1 61234567890',
    		EMAIL: 'nixalar@gmail.com',
    	},
    	SUBSCRIBE_NEWSLETTER: 'Subscribe newsletter',
    	SUBSCRIBE: 'Subscribe',
    };

    const SITE_DATA = {
    	NAVBAR_DATA,
    	BANNER_DATA,
    	ABOUT_DATA,
    	WORKGRID_DATA,
    	FOOTER_DATA,
    };

    /* src/App.svelte generated by Svelte v3.16.7 */
    const file$6 = "src/App.svelte";

    function create_fragment$6(ctx) {
    	let header;
    	let t0;
    	let t1;
    	let main;
    	let t2;
    	let t3;
    	let t4;
    	let footer1;
    	let current;

    	const navbar = new Navbar({
    			props: {
    				navlists: SITE_DATA.NAVBAR_DATA,
    				header: SITE_DATA.HEADER
    			},
    			$$inline: true
    		});

    	const banner = new Banner({
    			props: { bannerData: SITE_DATA.BANNER_DATA, "}": true },
    			$$inline: true
    		});

    	const about = new About({
    			props: { aboutData: SITE_DATA.ABOUT_DATA },
    			$$inline: true
    		});

    	const workgrid = new WorkGrid({
    			props: { workData: SITE_DATA.WORKGRID_DATA },
    			$$inline: true
    		});

    	const contact = new Contact({ $$inline: true });

    	const footer0 = new Footer({
    			props: {
    				footerData: SITE_DATA.FOOTER_DATA,
    				header: SITE_DATA.HEADER
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			header = element("header");
    			create_component(navbar.$$.fragment);
    			t0 = space();
    			create_component(banner.$$.fragment);
    			t1 = space();
    			main = element("main");
    			create_component(about.$$.fragment);
    			t2 = space();
    			create_component(workgrid.$$.fragment);
    			t3 = space();
    			create_component(contact.$$.fragment);
    			t4 = space();
    			footer1 = element("footer");
    			create_component(footer0.$$.fragment);
    			attr_dev(header, "class", "container");
    			add_location(header, file$6, 10, 0, 408);
    			attr_dev(main, "class", "container");
    			add_location(main, file$6, 16, 0, 588);
    			attr_dev(footer1, "class", "container");
    			add_location(footer1, file$6, 24, 0, 785);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, header, anchor);
    			mount_component(navbar, header, null);
    			append_dev(header, t0);
    			mount_component(banner, header, null);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, main, anchor);
    			mount_component(about, main, null);
    			append_dev(main, t2);
    			mount_component(workgrid, main, null);
    			append_dev(main, t3);
    			mount_component(contact, main, null);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, footer1, anchor);
    			mount_component(footer0, footer1, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navbar.$$.fragment, local);
    			transition_in(banner.$$.fragment, local);
    			transition_in(about.$$.fragment, local);
    			transition_in(workgrid.$$.fragment, local);
    			transition_in(contact.$$.fragment, local);
    			transition_in(footer0.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navbar.$$.fragment, local);
    			transition_out(banner.$$.fragment, local);
    			transition_out(about.$$.fragment, local);
    			transition_out(workgrid.$$.fragment, local);
    			transition_out(contact.$$.fragment, local);
    			transition_out(footer0.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(header);
    			destroy_component(navbar);
    			destroy_component(banner);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(main);
    			destroy_component(about);
    			destroy_component(workgrid);
    			destroy_component(contact);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(footer1);
    			destroy_component(footer0);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {
    		name: 'world',
    	},
    });

    /* SCROLL ANIMATIONS */
    const tiles = document.querySelectorAll('.work-projects');
    const fadeIns = document.querySelectorAll('.fade-ins');
    const scalers = document.querySelectorAll('.scalers');

    const options = {
    	threshold: 0,
    	rootMargin: '0px 0px -150px 0px',
    };

    const animateOnScroll = new IntersectionObserver(function (
    	entries,
    	animateOnScroll
    ) {
    	entries.forEach((entry) => {
    		if (!entry.isIntersecting) {
    			return;
    		} else {
    			entry.target.classList.add('active');
    			animateOnScroll.unobserve(entry.target);
    		}
    	});
    },
    options);

    tiles.forEach((tile) => {
    	animateOnScroll.observe(tile);
    });
    fadeIns.forEach((fade) => {
    	animateOnScroll.observe(fade);
    });
    scalers.forEach((scale) => {
    	animateOnScroll.observe(scale);
    });

    window.addEventListener('load', function () {
    	setTimeout(() => {
    		window.scrollTo(0, 0);
    	}, 10);
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
