from huggingface_hub import hf_hub_download
import sys

MODEL_REPO = "TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF"
MODEL_FILE = "tinyllama-1.1b-chat-v1.0.Q4_K_M.gguf"

def download_model():
    print(f"Starting download for: {MODEL_REPO} / {MODEL_FILE}")
    print("This is a quantized model (~700MB) optimized for CPU speed.")
    
    try:
        model_path = hf_hub_download(repo_id=MODEL_REPO, filename=MODEL_FILE)
        print(f"Model downloaded successfully to: {model_path}")
        print("You can now use the AI Website Builder with optimized speed.")
        
    except Exception as e:
        print(f"Error downloading model: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    download_model()
