import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserCircle2, Box } from 'lucide-react'

export default function UgcStudioPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 animate-in fade-in duration-500">
      <div className="mx-auto w-full max-w-[620px] space-y-10">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase">
            UGC Studio
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Turn any video into video ad
          </h1>
        </div>

        <div className="p-3 mt-8 rounded-2xl bg-muted/30 border border-muted-foreground/10 shadow-sm backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 rounded-xl bg-background border flex items-center shadow-xs px-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <UserCircle2 className="h-5 w-5 text-muted-foreground/70 ml-2 shrink-0" strokeWidth={1.5} />
                <Input 
                  className="border-0 shadow-none focus-visible:ring-0 bg-transparent h-12 text-sm text-foreground placeholder:text-muted-foreground" 
                  placeholder="Select avatar..." 
                />
            </div>
            <div className="flex-1 rounded-xl bg-background border flex items-center shadow-xs px-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <Box className="h-5 w-5 text-muted-foreground/70 ml-2 shrink-0" strokeWidth={1.5} />
                <Input 
                  className="border-0 shadow-none focus-visible:ring-0 bg-transparent h-12 text-sm text-foreground placeholder:text-muted-foreground" 
                  placeholder="Product specification..." 
                />
            </div>
            
            <Button className="h-12 px-8 sm:w-auto w-full text-[15px] font-semibold text-primary-foreground shadow-xs transition-all rounded-xl bg-primary hover:bg-primary/90">
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
