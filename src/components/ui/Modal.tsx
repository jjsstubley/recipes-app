'use client'

import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "./dialog"
import { useRouter } from 'next/navigation'

export function Modal({ 
    children,
} : { children: React.ReactNode 

}) {
    const router = useRouter()

    const handleOpenChange = () => {
        router.back()
    }

    return (
        <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
            <DialogOverlay>
                <DialogContent className="overflow-y-hidden">
                    <DialogTitle>Test</DialogTitle>
                    { children }
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}