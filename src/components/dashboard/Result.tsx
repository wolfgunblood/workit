
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function Result({ generatedText, setActiveTab }: { generatedText: string, setActiveTab: (tab: string) => void }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Generated Text Result</CardTitle>
                <CardDescription>Here&apos;s the result of your text generation</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="p-4 bg-gray-100 rounded-md">
                        <p>{generatedText}</p>
                    </div>
                    <Button onClick={() => setActiveTab("generation")} className="w-full">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Generation
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
