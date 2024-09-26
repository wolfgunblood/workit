
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { GamepadIcon } from "lucide-react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [currentQuest, setCurrentQuest] = useState(0);
  const [score, setScore] = useState(0);

  const quests = [
    { question: "What's 2 + 2?", answer: "4" },
    { question: "What color is the sky?", answer: "blue" },
    { question: "How many legs does a cat have?", answer: "4" },
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      toast({
        title: "Let the games begin!",
        description: "Complete quests to move up the waitlist.",
      });
      setCurrentQuest(0);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  const handleAnswer = (answer: string) => {
    // Ensure currentQuest is in bounds
    if (
      quests[currentQuest] &&
      answer.toLowerCase() === quests[currentQuest].answer.toLowerCase()
    ) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: "You've earned a point and moved up the waitlist.",
      });
    } else {
      toast({
        title: "Oops!",
        description: "That's not quite right. Try again!",
        variant: "destructive",
      });
    }
    // Ensure we loop back to the first question after the last one
    setCurrentQuest((currentQuest + 1) % quests.length);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-violet-100 to-fuchsia-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-center">
          <GamepadIcon className="mr-2 h-12 w-12 text-violet-600" />
          <h2 className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-4xl font-extrabold text-transparent">
            QuestQueue
          </h2>
        </div>
        <p className="mb-2 text-center text-xl font-semibold text-gray-700">
          Game Your Way to the Top
        </p>
        <p className="mb-6 text-center text-gray-600">
          Complete quests to climb the waitlist and unlock exclusive rewards!
        </p>
        {email ? (
          <div className="space-y-4">
            <p className="text-center font-semibold">Current Score: {score}</p>
            <div className="rounded-lg bg-gray-100 p-4">
              {/* Safely render the current question */}
              <p className="mb-4 text-center">
                {quests[currentQuest]?.question}
              </p>
              <Input
                type="text"
                placeholder="Your answer"
                className="mb-2"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleAnswer((e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = "";
                  }
                }}
              />
              <div className="flex justify-center space-x-2">
                <Button
                  onClick={() =>
                    handleAnswer(document.querySelector("input")!.value)
                  }
                >
                  Submit Answer
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-full border-gray-300 px-4 py-3 focus:border-violet-500 focus:ring-violet-500"
            />
            <Button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 font-semibold text-white hover:from-violet-600 hover:to-fuchsia-600"
            >
              Start the Quest
            </Button>
          </form>
        )}
        <p className="mt-6 text-center text-sm text-gray-500">
          Play, compete, and secure your spot at the top of the waitlist!
        </p>
      </div>
    </div>
  );
}
