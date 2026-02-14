#[derive(Debug)]
pub struct Lumen {
    pub version: String,
}

macro_rules! log_lumen {
    ($msg:expr) => {
        println!("[Lumen] {}", $msg);
    };
}

fn main() {
    let theme = Lumen {
        version: String::from("0.1.0"),
    };

    log_lumen!("Verifying Rust syntax");

    match Some(theme) {
        Some(t) => println!("Active: {:?}", t),
        None => (),
    }
}
