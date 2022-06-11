interface VersolyCardProps {
  heading?: string;
  description?: string;
}

// This would be the component that is generated in Versoly
export default function VersolyCard({
  heading = "Heading from Versoly",
  description = "Description from Versoly",
}: VersolyCardProps) {
  return (
    <div className="flex">
      <h4 className="text-lg">{heading}</h4>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

// This shows examples of how the Versoly component can then be used within the app
function UsingCard() {
  return (
    <div>
      <VersolyCard />
      <VersolyCard
        heading="Heading from Contentful"
        description="Description from Contentful"
      />
    </div>
  );
}
