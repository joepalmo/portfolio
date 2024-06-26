import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                                                   */import { b as base } from "../../../chunks/paths.js";
import { C as Clouds } from "../../../chunks/Clouds.js";
const Project_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#research-card.svelte-va70i.svelte-va70i{border:1px solid #ddd;padding:16px;border-radius:8px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);margin-bottom:16px}.header.svelte-va70i.svelte-va70i{display:flex;justify-content:space-between;align-items:center}#research-card.svelte-va70i h2.svelte-va70i{font-size:1.5em;color:#333}#toggle-switch.svelte-va70i.svelte-va70i{font-size:1em;color:#007bff;cursor:pointer;margin:8px 0}#toggle-switch.svelte-va70i.svelte-va70i:hover{text-decoration:underline;text-shadow:0 0 5px rgba(0, 0, 0, 0.2)}#details.svelte-va70i.svelte-va70i{transition:all 0.3s ease-in-out}#research-card.svelte-va70i p.svelte-va70i{font-size:1em;line-height:1.5;color:#666;margin:8px 0}#research-card.svelte-va70i a.svelte-va70i{display:inline-block;margin-top:8px;color:#1e90ff;text-decoration:none}#research-card.svelte-va70i a.svelte-va70i:hover{text-decoration:underline}#research-card.svelte-va70i img.svelte-va70i{width:100%;height:auto;margin-top:16px;border-radius:8px}#research-card.svelte-va70i hr.svelte-va70i{margin-top:16px;border:none;border-top:1px solid #ddd}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Untitled Project" } = $$props;
  let { background = "No background provided." } = $$props;
  let { description = "No description provided." } = $$props;
  let { link = "#" } = $$props;
  let { togglemessage = "Click to hide details" } = $$props;
  let { imagedata = "/img/default.jpg" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.togglemessage === void 0 && $$bindings.togglemessage && togglemessage !== void 0)
    $$bindings.togglemessage(togglemessage);
  if ($$props.imagedata === void 0 && $$bindings.imagedata && imagedata !== void 0)
    $$bindings.imagedata(imagedata);
  $$result.css.add(css$1);
  return `<div id="research-card" class="svelte-va70i"><div class="header svelte-va70i"><h2 id="title" class="svelte-va70i">${escape(title)}</h2> <p id="toggle-switch" class="svelte-va70i">${escape(togglemessage)}</p></div> ${`<div id="details" class="svelte-va70i"><p id="background" class="svelte-va70i"><b data-svelte-h="svelte-7s9s0y">Background:</b> <br> <span><!-- HTML_TAG_START -->${background}<!-- HTML_TAG_END --></span></p> <p id="description" class="svelte-va70i"><b data-svelte-h="svelte-8hqfs8">Description:</b> <br> <span><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></span></p></div>`} <a${add_attribute("href", link, 0)} class="svelte-va70i">Link</a> <img${add_attribute("src", base + imagedata, 0)} alt="${"Image for " + escape(title, true)}" class="svelte-va70i"> <hr class="svelte-va70i"> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#body.svelte-v1lfnd.svelte-v1lfnd{width:40vw;min-width:500px;margin:auto;margin-top:15vh;font-size:1.0em;line-height:1.2rem;padding:10px 10px 50px 10px}canvas{pointer-events:none}a:hover{color:var(--black) !important;text-shadow:0 0 5px rgba(0,255,0,.18)}.gif-container.svelte-v1lfnd.svelte-v1lfnd{text-align:center}.gif-container.svelte-v1lfnd img.svelte-v1lfnd{max-width:100%;height:auto;border-radius:2px}@media(max-width: 600px){#body.svelte-v1lfnd.svelte-v1lfnd{width:90vw;min-width:auto;margin-top:15vh;font-size:1em;line-height:1.5rem;padding:10px 5px 30px 5px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Clouds, "Clouds").$$render($$result, { particleBackground: false }, {}, {})} <div id="body" class="svelte-v1lfnd"> <div class="gif-container svelte-v1lfnd" data-svelte-h="svelte-1dd8imr"><img src="https://svante.mit.edu/~jpalmo/gifs/co_globe.gif" alt="rotating globe with air pollution data" class="svelte-v1lfnd"></div> <div class="research-blurb" data-svelte-h="svelte-gxduui"></div> <hr> ${validate_component(Project, "Project").$$render(
    $$result,
    {
      title: "Wildfires and ozone",
      background: "Wildfires are likely to become more frequent and intense as global warming continues. They also emit compounds into the atmosphere that negatively impact air quality, health, and climate.  Among their emissions are precursors that react to produce ozone (O<sub>3</sub>), namely nitrogen oxides (NO<sub>x</sub>) and volatile organic compounds (VOCs). Ozone exposure is harmful to human health, it is the third most important anthropogenic greenhouse gas behind carbon dioxide and methane, and it is detrimental to crop and ecosystem productivity. Understanding ozone formation in fire plumes is essential for assessing the global impact of fires on ozone, and the effectiveness of surrounding policy, especially as wildfires become more pervasive.",
      description: "To capture the total ozone production that may be attributed to a smoke plume, we must bridge the gap between near-field fire plume chemistry and the remote atmosphere. Recent airborne observational campaigns provide rich datasets that make it possible to study the interactions between biomass burning plumes and urban pollution in high temporal resolution as they evolve. We evaluate the performance of GEOS-Chem, a global three-dimensional chemical transport model, against the dataset we compiled, and show that GEOS-Chem does not accurately reproduce the fast-moving chemistry that occurs within wildfire smoke plumes and therefore misrepresents the resulting ozone production. Informed by the discrepancies between GEOS-Chem and the observations, we test chemical trends observed in our dataset with a custom-built zero-dimensional chemical box model.",
      link: "",
      imagedata: "/img/O3Fire.png"
    },
    {},
    {}
  )}  </div>`;
});
export {
  Page as default
};
