import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./HomeworkAssistance.css";

type Grade = "R" | "1" | "2" | "3" | "4" | "5" | "6";

type Message = {
  role: "assistant" | "learner";
  text: string;
};

const grades: Grade[] = ["R", "1", "2", "3", "4", "5", "6"];

const subjectsByGrade: Record<Grade, string[]> = {
  R: ["Mathematics", "Home Language", "Life Skills"],
  "1": ["Mathematics", "Home Language", "Life Skills"],
  "2": ["Mathematics", "Home Language", "Life Skills"],
  "3": ["Mathematics", "Home Language", "Life Skills"],
  "4": [
    "Mathematics",
    "Home Language",
    "First Additional Language",
    "Natural Sciences & Technology",
    "Social Sciences",
    "Life Skills",
  ],
  "5": [
    "Mathematics",
    "Home Language",
    "First Additional Language",
    "Natural Sciences & Technology",
    "Social Sciences",
    "Life Skills",
  ],
  "6": [
    "Mathematics",
    "Home Language",
    "First Additional Language",
    "Natural Sciences & Technology",
    "Social Sciences",
    "Life Skills",
  ],
};

const starterPrompts = [
  "Explain this in a simple way",
  "Give me a hint, not the answer",
  "Help me check my work",
];

function createTutorReply(grade: Grade, subject: string, question: string) {
  const lowerQuestion = question.toLowerCase();

  if (subject === "Mathematics") {
    if (lowerQuestion.includes("fraction")) {
      return `For Grade ${grade}, start by looking at the bottom number. It tells you how many equal parts make the whole. Tell me what the top and bottom numbers are, and we can work through the next step together.`;
    }

    if (
      lowerQuestion.includes("add") ||
      lowerQuestion.includes("plus") ||
      lowerQuestion.includes("sum")
    ) {
      return `Let's solve it carefully. First, write the numbers underneath each other and line up the place values. Add the ones first, then the tens. What do you get in the ones column?`;
    }

    return `Let's break this ${subject.toLowerCase()} question into small steps. Underline the numbers or important words, decide what the question is asking, and try the first step. Share your working so I can give you a useful hint.`;
  }

  if (subject.includes("Language")) {
    return `For Grade ${grade} ${subject}, begin by reading the question twice. Circle the key word, then explain what you think it means in your own words. Send me the sentence or question and I will guide you without doing the work for you.`;
  }

  if (subject === "Natural Sciences & Technology") {
    return `Let's investigate it like a scientist. Identify what you already know, what you need to find out, and one prediction. Then describe the evidence from your worksheet or lesson.`;
  }

  if (subject === "Social Sciences") {
    return `Start with the who, what, where and when. Put the events or ideas in order, then explain one cause and one result. Share the question and I will help you build a clear answer.`;
  }

  return `For Grade ${grade} Life Skills, connect the question to a real-life example. Tell me what you already understand and where you feel stuck, and we will make a simple plan together.`;
}

function HomeworkAssistance() {
  const [grade, setGrade] = useState<Grade>("4");
  const [subject, setSubject] = useState(subjectsByGrade["4"][0]);
  const [question, setQuestion] = useState("");
  const [isAsking, setIsAsking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I am your study tutor. Choose your grade and subject, then tell me what you are working on. I will guide you step by step.",
    },
  ]);

  const handleGradeChange = (nextGrade: Grade) => {
    setGrade(nextGrade);
    setSubject(subjectsByGrade[nextGrade][0]);
  };

  const askTutor = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanQuestion = question.trim();

    if (!cleanQuestion) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "learner", text: cleanQuestion },
    ]);
    setQuestion("");

    setIsAsking(true);

    try {
      const response = await fetch("/api/homework-assistance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grade,
          subject,
          question: cleanQuestion,
        }),
      });

      if (!response.ok) {
        throw new Error("Homework service unavailable");
      }

      const data = (await response.json()) as { reply?: string };

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: data.reply || createTutorReply(grade, subject, cleanQuestion),
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: createTutorReply(grade, subject, cleanQuestion),
        },
      ]);
    } finally {
      setIsAsking(false);
    }
  };

  const handleStarterPrompt = (prompt: string) => {
    setQuestion(prompt);
  };

  return (
    <div className="homework-page">
      <Navbar />

      <main className="homework-main">
        <section className="homework-intro">
          <div>
            <p className="homework-eyebrow">GRADE R - 6 STUDY SUPPORT</p>
            <h1>
              Learn it.
              <span>Understand it.</span>
            </h1>
            <p className="homework-lead">
              A friendly homework tutor for primary learners. Ask questions,
              get hints, and build the answer one step at a time.
            </p>
          </div>

          <div className="homework-trust-card">
            <span className="homework-trust-icon">✦</span>
            <strong>Guided learning</strong>
            <p>The tutor explains the thinking so learners can do the next one independently.</p>
          </div>
        </section>

        <section className="homework-workspace" aria-label="Homework tutor">
          <aside className="homework-controls">
            <div className="homework-section-label">SET YOUR CONTEXT</div>
            <h2>What are you studying?</h2>
            <p>Choose a grade and subject so the guidance fits the learner.</p>

            <label htmlFor="homework-grade">Grade</label>
            <div className="homework-grade-grid">
              {grades.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={item === grade ? "active" : ""}
                  onClick={() => handleGradeChange(item)}
                >
                  {item === "R" ? "Grade R" : `Grade ${item}`}
                </button>
              ))}
            </div>

            <label htmlFor="homework-subject">Subject</label>
            <select
              id="homework-subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            >
              {subjectsByGrade[grade].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <div className="homework-tip">
              <span>◎</span>
              <p>Try sharing your working, not only the question. That helps the tutor give a better hint.</p>
            </div>

            <Link to="/primary/phases" className="homework-back-link">
              Browse primary subjects <span>→</span>
            </Link>
          </aside>

          <div className="homework-chat">
            <div className="homework-chat-header">
              <div className="homework-avatar">P</div>
              <div>
                <strong>PastPaper Tutor</strong>
                <span>Grade {grade} · {subject}</span>
              </div>
              <span className="homework-status">Ready</span>
            </div>

            <div className="homework-messages" aria-live="polite">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`homework-message ${message.role}`}>
                  <span>{message.role === "assistant" ? "Tutor" : "You"}</span>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>

            <div className="homework-starters">
              {starterPrompts.map((prompt) => (
                  <button key={prompt} type="button" onClick={() => handleStarterPrompt(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>

            <form className="homework-form" onSubmit={askTutor}>
              <label htmlFor="homework-question">Your homework question</label>
              <div>
                <textarea
                  id="homework-question"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="Type the question or explain where you are stuck..."
                  rows={3}
                />
                <button type="submit" aria-label="Ask tutor" disabled={isAsking}>
                  {isAsking ? "Thinking..." : "Ask tutor"} <span>→</span>
                </button>
              </div>
              <small>Check your schoolwork with a parent or teacher when you need extra support.</small>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeworkAssistance;
