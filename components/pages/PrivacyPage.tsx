import React from 'react';
import LegalPageLayout from '../LegalPageLayout';

const PrivacyPage: React.FC = () => {
  return (
    <LegalPageLayout title="Privacy Policy">
      <h2>1. Information We Collect</h2>
      <p>We may collect personal identification information from Users in a variety of ways, including, but not to, when Users visit our site, register on the site, place an order, and in connection with other activities, services, features or resources we make available on our Site.</p>
      
      <h2>2. How We Use Collected Information</h2>
      <p>HMPS & Associates may collect and use Users personal information for the following purposes: to improve customer service, to personalize user experience, to process payments, to send periodic emails.</p>

      <h2>3. How We Protect Your Information</h2>
      <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>

      <h2>4. Sharing Your Personal Information</h2>
      <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>

      <h2>5. Changes to This Privacy Policy</h2>
      <p>HMPS & Associates has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>
      
    </LegalPageLayout>
  );
};

export default PrivacyPage;