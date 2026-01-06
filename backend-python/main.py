from fastapi import FastAPI

app = FastAPI(title="SmartDocs AI Backend")

@app.post("/ai/health")
async def health_check():
    return {"status": "FastAPI AI backend running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
