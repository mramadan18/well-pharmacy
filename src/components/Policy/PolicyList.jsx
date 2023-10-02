import PolicyItem from "./PolicyItem";

const PolicyList = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <PolicyItem />
      <PolicyItem
        title="1- Introduction"
        desc='This policy outlines the terms and conditions of use for our pharmacy website ("www.well-medic.com"). By accessing and using the Website, you agree to be bound by the terms and conditions described herein. We reserve the right to amend or update this policy at any time, and it is your responsibility to check for updates periodically. Your continued use of the Website signifies your acceptance of any changes to this policy....'
      />

      <PolicyItem
        title="2- Privacy and Security"
        desc="
We take the privacy and security of our users very seriously. Our Privacy Policy describes the types of personal information we collect, how we use it, and how we protect it. By using the Website, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy."
      />

      <PolicyItem
        title="3- User Accounts and Access"
        desc="
To access certain features of the Website, users may be required to create an account. Users are responsible for maintaining the confidentiality of their account credentials and are solely responsible for all activities occurring under their account. We reserve the right to suspend or terminate any account without notice if we suspect unauthorized use, fraud, or any other violation of this policy."
      />

      <PolicyItem
        title="4- Prescription and Over-the-Counter Medications"
        desc="
Prescription medications may only be ordered by users with a valid prescription from a licensed healthcare provider. Users are required to provide accurate and complete prescription information when placing an order. We reserve the right to verify any prescription before processing an order. Over-the-counter medications and other products may be purchased without a prescription, subject to any restrictions imposed by applicable laws and regulations."
      />

      <PolicyItem
        title="5- Order Processing and Shipping"
        desc="
          All orders are subject to availability and confirmation of the order price. We reserve the right to cancel any order if there are any issues with the order or if the requested products are out of stock. Shipping and delivery times may vary depending on the destination and other factors. We will not be held responsible for any delays in delivery due to circumstances beyond our control, such as natural disasters, strikes, or customs clearance issues."
      />

      <PolicyItem
        title="6- Returns and Refunds"
        desc="
          Our returns and refunds policy outlines the conditions under which products may be returned or refunded. Please review this policy before placing an order."
      />

      <PolicyItem
        title="7- Limitation of Liability"
        desc="
To the maximum extent permitted by law, we disclaim all warranties, express or implied, regarding the accuracy, reliability, or completeness of the information and content on the Website. We shall not be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use the Website or its content."
      />

      <PolicyItem
        title="8- Intellectual Property"
        desc="
All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of the pharmacy or its content suppliers and is protected by international copyright laws. The reproduction, modification, distribution, or transmission of any content without our express written permission is strictly prohibited."
      />

      <PolicyItem
        title="9- Governing Law"
        desc="
          This policy and any disputes relating to it or the use of the Website shall be governed by and construed in accordance with the laws of the jurisdiction in which the pharmacy is registered.
"
      />

      <PolicyItem
        title="10- Contact Information"
        desc="
If you have any questions or concerns regarding this policy or the Website, please contact our customer support team using the contact information provided on the Website."
      />
    </div>
  );
};

export default PolicyList;
