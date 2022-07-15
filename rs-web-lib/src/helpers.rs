use wasm_bindgen::{prelude::*, JsCast};
use winit::platform::web::WindowExtWebSys;

pub fn create_append_canvas() {
    web_sys::window()
        .and_then(|win| win.document())
        .and_then(|doc| doc.body())
        .and_then(|body| {
            body.append_child(&web_sys::Element::from(window.canvas()))
                .ok()
        })
        .expect("couldn't append canvas to document body");
}
