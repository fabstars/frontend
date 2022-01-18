import React from "react";
import { Link } from "react-router-dom";
import "./s1.css";
import { isAuthenticated } from "../../../auth";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="banner">
        <header className="header u-container skip-parallax">
          <Link to="/" style={{ marginLeft: "2.8em" }}>
            <h1 className="qaya-logo">Fab</h1>
          </Link>
          <nav>
            <ul>
              {!isAuthenticated() && (
                <li style={{ "margin-right": "-70px" }}>
                  <Link className="button-72" to="/signin">
                    Log in
                  </Link>
                </li>
              )}

              {isAuthenticated() &&
                (isAuthenticated().user.role === "1" ||
                  isAuthenticated().user.role === "2") && (
                  <li style={{ "margin-right": "-70px" }}>
                    <Link className="button-72" to="/user/dashboard">
                      Dashboard
                    </Link>
                  </li>
                )}

              {isAuthenticated() && isAuthenticated().user.role === "0" && (
                <li style={{ "margin-right": "-70px" }}>
                  <Link className="button-72" to="/admin/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}

              <li>
                <Link
                  className="button-72"
                  style={{ "margin-right": "-45px" }}
                  to="/get-started"
                  target="_blank"
                >
                  Get Started
                </Link>
              </li>

              <li>
                <Link
                  style={{ "margin-right": "-45px" }}
                  className="button-72"
                  to="/about"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link className="button-72" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="bgcolora">
        <div className="start-heading text-center"><h1>Privacy Policy</h1></div>
        <div className="bgarea">
        <p className="beautify">Fab Store and its affiliates (“Fab Store,” “we,” “our,” and/or “us”) value the privacy of individuals who use our website at https://www.myfab.store.com (our “Site”), as well 
        as related websites and related services (collectively, our “Services”). This privacy policy (the “Privacy Policy”) explains how we collect, use, and share personal information from or about the users of our Services. If you are located in the European Economic Area (“EEA”) or the United Kingdom, “personal information” means any information relating to an identified or identifiable individual. The Privacy Policy applies to visitors of our Site and our customers (“Customers”) who use our Services to create online platforms to sell high-quality branded products and show their fans love.
In addition to the activities described in this Policy, we process personal information provided by our customers when they use our Services. Our Customers use our Services to run their businesses and develop their online platforms for their end-user customers, and in doing so collect personal information about their end-user customers, including, for example, their end-user customers’ name and mailing address, contact info, the services that they provide for them, as well as financial, payment and other end-user customer information. We process personal information of their end-user customers as a data processor and service provider on our Customers’ behalf and on the instructions of our Customers, which are the entities responsible for the data processing. To understand how any of our Customers process your personal information, please refer to that Customer’s privacy policy.
By using our Services, you agree to the collection, use, and disclosure of your personal information as described in this Privacy Policy. Beyond the Privacy Policy, your use of our Services is also subject to our Terms of Service.</p>
        <h3>INFORMATION WE COLLECT</h3>
        <p className="beautify">We may collect a variety of personal information from or about you or your devices from various sources, as described below.
A. Information You Provide to Us
Registration and Profile Information:- If you request an invite to use our Services, we ask you for your name or nickname, email address, channel URL, and other information too can create your account. If you sign up for an account, we ask you to create a username and password. We also ask you for your name, email address, date of birth, and other information.
Payment Information:- When you make payments to or through our Services, you may need to provide Personal Information to our third-party service providers, Cashfree such as your credit card number and billing address.
Communications:- If you contact us directly, we may receive personal information about you. For example, when you contact us for more information about Fab Store or to request an invite, we will receive your name or nickname, email address, channel URL, and the contents of your email. When we send you emails, we may track whether you open them to learn how to deliver a better customer experience and improve our Services.
B. Information We Collect When You Use Our Services
When you use our Services, we may infer the general physical location of your device and the geographic regions our users come from. For example, your internet protocol (“IP”) address may indicate your general geographic region.
Device Information:- We receive information about the device and software you use to download or access our Services, including IP address, web browser type, operating system name and version, and device identifiers.
Usage Information:- To help us understand how you use our Services and to help us improve them, we automatically receive information about your interactions with our Services, like log files, performance logs, diagnostic reports, the pages or other content you view, the searches you conduct, and the dates, times, and durations of your use of our Services.
Information from Cookies and Similar Technologies:- We and third-party partners collect information using cookies, pixel tags, or similar technologies. Our third-party partners, such as analytics partners, may use these technologies to collect information about your online activities over time and across different services. Cookies are small text files containing a string of alphanumeric characters. We may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to our Services.
Cookies can also be used for functionality management, enabling us to make the user’s visit more efficient by, for example, remembering language preferences, passwords and log-in details. We may also use pixel tags and web beacons on our Services. These are tiny graphic images placed on web pages or in the emails that allow us to determine whether you have performed a specific action. Below is an overview of the types of cookies we and third parties may use to collect information.
Strictly necessary cookies:- Some cookies are strictly necessary to make our Services available to you. We cannot provide you with our Services without this type of cookies.
Functional cookies:- These are used to recognize you when you return to our Services. This enables us to adapt our content for you, and remember your preferences (for example, your choice of language or region).
Analytical or Performance cookies:- We also use cookies for website and app analytics purposes in order to operate, maintain and improve our Services.
Where required by applicable law, we obtain your consent to use cookies. Please review your web browser’s “Help” file to learn the proper way to modify your cookie settings. Please note that if you delete or choose not to accept cookies from our Services, you may not be able to utilize the features of our Services to their fullest potential.
C. Information We Receive from Third Parties
Partners:- We may receive additional personal information about you from third parties such as data or marketing partners and combine it with other personal information we have about you.
Other Users:- We may receive additional information about you from third parties, such as your end users.</p> 
        <h3>HOW WE USE THE INFORMATION WE COLLECT
</h3>
        <p className="beautify">We use the personal information we collect:
To provide, maintain, improve, and enhance our Services;
To communicate with you, provide you with updates and other information relating to our Services, provide information that you request, respond to comments and questions, and otherwise provide support;
To understand and analyze how you use our Services and develop new products, services, and features;
To de-identify and aggregate information collected through our Services and use it for our business purposes;
To find and prevent fraud, and respond to trust and safety issues that may arise;
For compliance purposes, including enforcing our Terms of Service and other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency; and
For other purposes for which we provide specific notice at the time the personal information is collected.
</p> 
        <h3>LEGAL BASES FOR PROCESSING EUROPEAN PERSONAL INFORMATION
</h3>
        <p className="beautify">If you are located in the European Economic Area or the United Kingdom, we only process your personal information when we have a valid “legal basis”, including when:
Consent:- You have consented to the use of your personal information, for example to submit your job application to our Services, or to use cookies.
Contractual necessity:- We need your personal information to provide you with the services you have requested, for example, to respond to your inquiries.
Compliance with a legal obligation:- We have a legal obligation to use your personal information, for example, to comply with tax and accounting obligations.
Legitimate interests:- We or a third party have a legitimate interest in using your personal information. In particular, we have a legitimate interest in using your personal information for product development and internal analytics purposes, and otherwise to improve the safety, security, and performance of our Services. We only rely on our or a third party’s legitimate interests to process your personal information when these interests are not overridden by your rights and interests.
</p>
        <h3>HOW WE SHARE THE INFORMATION WE COLLECT</h3>
        <p className="beautify">
        We may disclose personal information we collect from or about you as described below or otherwise disclosed to you at the time of collection.
Affiliates:- We may share any personal information we receive with our affiliates for any of the purposes described in this Privacy Policy.
Vendors and Service Providers:- We may share any personal information we receive with vendors and service providers retained in connection with the provision of our Services.
Other Users:- Our Customers are able to use our Services to create and develop online platforms and share content with other users. Any personal information that you voluntarily choose to include on or through our Services, including in a publicly accessible area of our Services (such as your online platform) or information you share with other users will be available to anyone who has access to that content. We are not responsible for other users’ use of available information, so you should carefully consider whether and what to post or how you identify yourself on our Services.
Analytics Partners:- We use analytics services such as Google Analytics to collect and process certain analytics data. These services may also collect information about your use of other websites, apps, and online resources. You can learn about Google’s practices by going to https://www.google.com/policies/privacy/partners/ and opt-out of them by downloading the Google Analytics opt-out browser add-on, available at https://tools.google.com/dlpage/gaoptout.
As Required By Law and Similar Disclosures. We may access, preserve, and disclose your personal information if we believe doing so is required or appropriate to (a) comply with law enforcement requests and legal processes, such as a court order or subpoena; (b) respond to your requests; or (c) protect your, our, or others’ rights, property, or safety. For the avoidance of doubt, the disclosure of your personal information may occur if you post any objectionable content on or through our Services.
Merger, Sale, or Other Asset Transfers:- We may disclose and transfer your personal information to service providers, advisors, potential transactional partners, or other third parties in connection with the consideration, negotiation, or completion of a corporate transaction in which we are acquired by or merged with another company or we sell, liquidate, or transfer all or a portion of our business or assets.
Consent:- We may also disclose personal information from or about you or your devices with your permission.
        </p>
        <h3>ACCEPTABLE USE POLICY</h3>
        <p className="beautify">While Fab Store believes in the free and open exchange of ideas and products, certain activities are expressly prohibited in order to create a better experience for creators and their fans. The following activities are forbidden:
Child exploitation:- You may not use your Fab Store shop to offer goods/services or host content that either exploits or abuses children. This includes but is not limited to depictions of child abuse or the presentation of children in a sexual manner.
Illegal activities:- You may not use your Fab Store shop to offer goods/services or host content that violate the laws of the jurisdictions in which you operate or do business.
Hateful content:- You may not use your Fab Store shop to offer goods/services or host content that promotes hate or violence against people based on race, ethnicity, color, national origin, religion, age, gender, sexual orientation, disability, medical condition, veteran status, or other forms of discriminatory intolerance.
Self-harm:- You may not use your Fab Store shop to offer goods/services or host content that promotes self-harm.
Personal, confidential, and protected information:- You may not use your Fab Store shop to offer goods/services or host content that contains personally identifiable information, sensitive personal information, sensitive health information, or confidential information (credit card numbers, confidential national ID numbers, or account passwords) unless you have express written consent from the person to whom the information belongs or are other authorized.
Intellectual property:- You may not offer goods or services, or post or upload Materials, that infringe on the copyright or trademarks of others.
Terrorist organizations:- You may not use your Fab Store shop to offer goods/services or host content that support either the funding of or the membership in a terrorist organization.
Fab Store has the right, but not the obligation, to monitor or investigate compliance with respect to this AUP. Fab Store may, at any time and without notice, suspend or terminate your account if you engage in activities that violate the either letter or spirit of this policy. Our determination of whether a violation of this AUP has occurred will be final and binding. Any action or inaction taken with respect to enforcing this AUP will be at our sole discretion.
Fab Store can modify this policy at any time by posting a timestamped update. By continuing to use Fab Store after a revised version of the AUP has been posted, you agree to comply with the latest version.
</p>
        <h3>YOUR RIGHTS AND CHOICES</h3>
        <p className="beautify">
        If you are located in the European Economic Area or the United Kingdom, you have the additional rights described below.
You may request access to the personal information we maintain about you, update and correct inaccuracies in your personal information, restrict or object to the processing of your infor*mation, have the personal information anonymized or deleted, as appropriate, or exercise your right to data portability to easily transfer your personal information to another company. In addition, you also have the right to complain about a supervisory authority, including in your country of residence, place of work, or where an incident takes place.
You may withdraw any consent you previously provided to us regarding the processing of your personal information, at any time and free of charge. We will apply your preferences going forward and this will not affect the lawfulness of the processing before you withdrew your consent.
You may exercise these rights by contacting us using the contact details at the end of this Privacy Policy. Before meeting your request, we may ask you to provide reasonable information to verify your identity. Please note that there are exceptions and limitations to each of these rights and that while any changes you make will be reflected in active user databases instantly or within a reasonable period of time, we may retain information for backups, archiving, prevention of fraud and abuse, analytics, the satisfaction of legal obligations, or where we otherwise reasonably believe that we have a legitimate reason to do so.

        </p>
        <h3>THIRD PARTIES</h3>
        <p className="beautify">
        Our Services may contain links to other websites, products, or services that we do not own or operate. We are not responsible for the privacy practices of these third parties. Please be aware that this Privacy Policy does not apply to your activities on these third-party services or any personal information you disclose to these third parties. We encourage you to read their privacy policies before providing any personal information to them.
        </p>
        <h3>ACCOUNT DELETION</h3>
        <p className="beautify">
        You may stop using our Service, by contacting Fab Store at support.fs@gmail.com and requesting account deletion. We may retain certain information as required by law or as necessary for our legitimate business purposes. All provisions of this agreement survive termination of an account, including our rights regarding any content you’ve already submitted to the Site. (For instance, if you’ve launched a page, deleting your account will not automatically remove the page from the Site.) If you have bought a product, you can find information about your that on our site.
        </p>
        <h3>RETENTION</h3>
        <p className="beautify">
        We take measures to delete your personal information or keep it in a form that does not permit identifying you when this information is no longer necessary for the purposes for which we process it unless we are required by law to keep this information for a longer period. When determining the specific retention period, we take into account various criteria, such as the type of service provided to you, the nature and length of our relationship with you, and mandatory retention periods provided by law and the statute of limitations.
        </p>
        <h3>SECURITY</h3>
        <p className="beautify">
        We make reasonable efforts to protect your personal information by using physical and electronic safeguards designed to improve the security of the personal information we maintain. However, as no electronic transmission or storage of personal information can be entirely secure, we can make no guarantees as to the security or privacy of your personal information.
        </p>
        <h3>BUSINESS TRANSFERS</h3>
        <p className="beautify">
        If Fab Store, or substantially all of its assets, were acquired, or in the unlikely event that Fab Store goes out of business or enters bankruptcy, user information would be one of the assets that are transferred or acquired by a third party. You acknowledge that such transfers may occur and that any acquirer of Fab Store may continue to use your personal information as outlined in this policy.
        </p>
        <h3>ADS</h3>
        <p className="beautify">
        We do not run any external advertisements on Fab Store. However, we use ad networks such as Twitter Ads to collect retargeting information to compile information about our users. This Privacy Policy covers the use of cookies by Fab Store and does not cover the use of cookies by any advertisers.
        </p>
        <h3>CHILDREN’S PRIVACY</h3>
        <p className="beautify">
        We do not knowingly collect, maintain, or use personal information from children under 13 years of age, and no part of our Services are directed to children. If you learn that a child has provided us with personal information in violation of this Privacy Policy, then you may alert us at support.fs@gmail.com.
        </p>
        <h3>INTERNATIONAL VISITORS</h3>
        <p className="beautify">
        Our Services are hosted in the United States. If you choose to use our Services from the European Union or other regions of the world with laws governing data collection and use that may differ from U.S. law, then please note that you are transferring your personal information outside of those regions to the United States for storage and processing. We may transfer personal information from the European Union to the United States as needed to perform the Services that you have requested from us, or with your consent. Also, we may transfer your data from the U.S. to other countries or regions in connection with the storage and processing of data, fulfilling your requests, and operating our Services. By providing any information, including personal information, on or to our Services, you consent to such transfer, storage, and processing.
        </p>
        <h3>CHANGES TO THIS PRIVACY POLICY</h3>
        <p className="beautify">
        We will post any adjustments to the Privacy Policy on this page, and the revised version will be effective when it is posted. If we materially change the ways in which we use or share personal information previously collected from you through our Services, we will attempt to notify you through our Services, by email, or other means.
        </p>
        <h3>CONTACT INFORMATION</h3>
        <p className="beautify">
        If you have any questions, comments, or concerns about our processing activities, please email us at support.fs@gmail.com 
        </p>
        <h3>Contact Us:-</h3>
        <p className="beautify">
        8445814825<br></br>
        contactfs24x7@gmail.com
        </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;