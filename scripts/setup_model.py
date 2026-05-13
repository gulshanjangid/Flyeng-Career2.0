import torch
from transformers import AutoTokenizer, AutoModelForCausalLM
import sys

MODEL_NAME = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"

def download_model():
    print(f"Starting download for: {MODEL_NAME}")
    print("This may take a while depending on your internet speed...")
    
    try:
        print("Downloading Tokenizer...")
        tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
        print("Tokenizer downloaded successfully.")
        
        print("Downloading Model (approx 1-2 GB)...")
        model = AutoModelForCausalLM.from_pretrained(
            MODEL_NAME,
            torch_dtype=torch.float16 if torch.cuda.is_available() else torch.float32,
            device_map="auto"
        )
        print("Model downloaded and cached successfully!")
        print("You can now use the AI Website Builder.")
        
    except Exception as e:
        print(f"Error downloading model: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    download_model()
