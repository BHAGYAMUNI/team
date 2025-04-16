import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "How do I find teammates for a hackathon?",
      answer: "You can find teammates by browsing through the Discover page, where you can see other users' profiles and skills. You can also post your project idea and requirements to attract potential teammates."
    },
    {
      question: "What if I can't find a team?",
      answer: "Don't worry! You can join our Discord community where many solo participants look for teams. Also, check out the 'Looking for Team' section in the Discover page."
    },
    {
      question: "How do I create a project?",
      answer: "Go to your profile and click on 'Create Project'. Fill in the project details, including the tech stack, required skills, and project description. You can then share it with potential teammates."
    },
    {
      question: "Can I participate in multiple hackathons?",
      answer: "Yes, you can participate in multiple hackathons as long as you can manage your time effectively. Make sure to check each hackathon's rules regarding multiple participations."
    },
    {
      question: "How do I update my skills?",
      answer: "Go to your profile page and click on 'Edit Profile'. You can add or update your skills, experience, and other relevant information there."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team through the Support page, where you can submit a ticket or use our live chat feature. We typically respond within 24 hours."
    },
    {
      question: "Is there a limit to how many team members I can have?",
      answer: "The team size limit depends on the specific hackathon rules. However, our platform supports teams of up to 5 members by default. You can check the hackathon details for specific requirements."
    },
    {
      question: "How do I verify my account?",
      answer: "After registration, you'll receive a verification email. Click the link in the email to verify your account. If you haven't received the email, check your spam folder or request a new verification email."
    },
    {
      question: "Can I change my username?",
      answer: "Yes, you can change your username in your profile settings. However, you can only change it once every 30 days to prevent confusion."
    },
    {
      question: "What happens if my team disbands?",
      answer: "If your team disbands, you can either join another team or create a new one. Make sure to update your team status in your profile to let others know you're available."
    },
    {
      question: "How do I report inappropriate behavior?",
      answer: "You can report inappropriate behavior by clicking the report button on the user's profile or by contacting our support team directly. We take all reports seriously and will investigate promptly."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take data security seriously. All personal information is encrypted and stored securely. You can read more about our security measures in our Privacy Policy."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-black">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 