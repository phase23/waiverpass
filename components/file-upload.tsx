"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FileUpload() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type !== "text/xml" && !file.name.endsWith(".xml")) {
      alert("Please upload an XML file")
      return
    }

    setFile(file)
    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const resetUpload = () => {
    setFile(null)
    setIsComplete(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Card className={`w-full shadow-lg bg-white ${isDragging ? "border-gold-500 bg-gold-50" : ""}`}>
      <CardContent className="p-6">
        {!file ? (
          <div
            className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleButtonClick}
          >
            <div className="bg-gold-100 p-4 rounded-full mb-4">
              <Upload className="h-8 w-8 text-navy-800" />
            </div>
            <p className="text-lg text-navy-700 text-center mb-2">👉 Drag your ASYCUDA XML here</p>
            <p className="text-base text-gold-600 font-medium">or Click to Upload</p>
            <input ref={fileInputRef} type="file" accept=".xml" className="hidden" onChange={handleFileInput} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6">
            {isProcessing ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-800 mb-4"></div>
                <p className="text-lg text-navy-700">Processing your file...</p>
              </div>
            ) : isComplete ? (
              <div className="flex flex-col items-center">
                <div className="rounded-full h-12 w-12 bg-green-100 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-navy-700 mb-2">File processed successfully!</p>
                <p className="text-sm text-navy-500 mb-6">{file.name}</p>
                <div className="flex space-x-4">
                  <Button size="lg" variant="outline" onClick={resetUpload} className="border-navy-800 text-navy-800">
                    Upload Another
                  </Button>
                  <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                    Download JSON
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

