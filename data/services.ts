import { ServiceCategory } from '../types';

export const serviceData: ServiceCategory[] = [
  {
    category: "ROC Filing",
    services: [
      {
        name: "Annual Filing - MGT-7 (Annual Return)",
        price: 5000,
        billing: "yearly",
        description: "Annual return filing with company details and shareholding.",
        subtasks: 4
      },
      {
        name: "Form DIR-3 KYC (Director KYC)",
        price: 1500,
        billing: "yearly",
        description: "Annual KYC for all Directors with DIN.",
        subtasks: 3
      },
      {
        name: "Company Incorporation - Private Limited",
        price: 12000,
        billing: "one-time",
        description: "Complete company registration process.",
        subtasks: 5
      },
      {
        name: "Annual Filing - AOC-4 (Financial Statements)",
        price: 6000,
        billing: "yearly",
        description: "Filing of annual accounts with Registrar of Companies.",
        subtasks: 4
      }
    ]
  },
  {
    category: "GST Filing",
    services: [
      {
        name: "Monthly GSTR-3B Filing",
        price: 1000,
        billing: "monthly",
        description: "Monthly summary return of outward and inward supplies.",
        subtasks: 2
      },
      {
        name: "Monthly/Quarterly GSTR-1 Filing",
        price: 1200,
        billing: "monthly",
        description: "Details of all outward supplies of goods and services.",
        subtasks: 3
      },
      {
        name: "Annual GSTR-9 Filing",
        price: 7500,
        billing: "yearly",
        description: "Consolidated annual return for a financial year.",
        subtasks: 5
      },
      {
        name: "New GST Registration",
        price: 2500,
        billing: "one-time",
        description: "Obtain your Goods and Services Tax Identification Number (GSTIN).",
        subtasks: 4
      }
    ]
  },
  {
    category: "ITR Filing",
    services: [
      {
        name: "ITR-1 (Salaried Individuals)",
        price: 800,
        billing: "yearly",
        description: "For individuals being a resident with total income up to ₹50 lakh.",
        subtasks: 2
      },
      {
        name: "ITR-2 (Capital Gains & Foreign Income)",
        price: 3000,
        billing: "yearly",
        description: "For individuals and HUFs not having income from profits and gains of business.",
        subtasks: 4
      },
      {
        name: "ITR-3 (Business & Profession)",
        price: 5000,
        billing: "yearly",
        description: "For individuals and HUFs having income from profits and gains of business.",
        subtasks: 5
      },
      {
        name: "ITR-4 (Presumptive Income)",
        price: 2500,
        billing: "yearly",
        description: "For Individuals, HUFs and Firms with Total Income up to ₹50 lakh and having presumptive income.",
        subtasks: 3
      }
    ]
  },
  {
    category: "Other Services",
    services: [
      {
        name: "MSME Registration (Udyam)",
        price: 1200,
        billing: "one-time",
        description: "Official registration for Micro, Small, and Medium Enterprises.",
        subtasks: 2
      },
      {
        name: "Trademark Registration",
        price: 8000,
        billing: "one-time",
        description: "Protect your brand name and logo by registering it as a trademark.",
        subtasks: 6
      },
      {
        name: "FSSAI License",
        price: 4500,
        billing: "yearly",
        description: "Mandatory food license for all food business operators in India.",
        subtasks: 3
      },
      {
        name: "Import Export Code (IEC)",
        price: 2000,
        billing: "one-time",
        description: "Required for businesses engaged in the import and export of goods.",
        subtasks: 2
      },
      {
        name: "Partnership Deed Drafting",
        price: 4000,
        billing: "one-time",
        description: "Drafting and registration of a legally binding partnership agreement.",
        subtasks: 3
      },
      {
        name: "Digital Signature Certificate (DSC)",
        price: 1800,
        billing: "yearly",
        description: "Class 3 DSC with a 2-year validity for secure digital transactions.",
        subtasks: 2
      }
    ]
  }
];
