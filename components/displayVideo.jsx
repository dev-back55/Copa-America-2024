import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DisplayVideo({url, descrip, titulo}) {

  return (
    <div className="flex justify-center align-center">
        <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">{titulo.slice(0, 10)}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>{titulo}</DialogTitle>
            <DialogDescription>
                {descrip}
            </DialogDescription>
            </DialogHeader>
            <video 
                src={url} 
                width="auto"
                height="auto"
                controls
                autoPlay
                className="rounded-lg">
            </video>
            {/*<DialogFooter>
            <Button type="submit">Save changes</Button>
            </DialogFooter>*/}
        </DialogContent>
    </Dialog>
    </div>
  )
}
