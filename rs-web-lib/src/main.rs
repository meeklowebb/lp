#![allow(unused_must_use)]

use std::error::Error;

// Get GPU Card Information
async fn start() -> Option<usize> {
    let instance = wgpu::Instance::new(wgpu::Backends::all());
    // `request_adapter` instantiates the general connection to the GPU
    let adapter = instance
        .request_adapter(&wgpu::RequestAdapterOptions::default())
        .await?;
    let info = adapter.get_info();
    println!("device: {}", info.device);
    println!("vendor: {}", info.vendor);
    println!("name: {}", info.name);
    println!("name: {:?}", info.backend);
    Some(12)
}

#[tokio::main]
async fn main() ->  Result<(), Box<dyn Error>> {
    println!("Starting app");
    start().await.ok_or_else(|| "alo");
    Ok(())
}
