export default function ProjectsPortfolio() {
  const projects = [
    "Banking Core System – ABC Bank",
    "Payment Gateway – SecurePay",
    "Cloud Migration – RetailX",
    "ERP System – ManufacturePro",
    "AI Analytics Dashboard – DataSphere",
    "Mobile Banking App – Global FinTech",
    "Cybersecurity Audit – InsureTech",
    "CRM Platform – Enterprise Pvt Ltd",
    "HRMS Platform – SmartERP",
    "DevOps Automation – CloudNova",
    "API Gateway – PayFlow",
    "Healthcare Portal – HealthTech",
    "Inventory System – LogiChain",
    "Admin Dashboard – FinTech Corp",
    "Analytics Engine – DataSphere",
    "Microservices Platform – CloudNova",
    "Mobile Wallet – SecurePay",
    "Enterprise CMS – RetailX",
    "Payment Reconciliation – ABC Bank",
    "Reporting Platform – Global FinTech"
  ];

  return (
    <main className="pt-24 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">
          Projects Delivered
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="border border-gray-700 p-6 rounded-xl bg-slate-900"
            >
              {project}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
