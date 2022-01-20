import React from "react";
import { Link } from "react-router-dom";
import "./s1.css";
import { isAuthenticated } from "../../../auth";

const Terms = () => {
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
        <div className="start-heading text-center"><h1>Terms of Service</h1></div>
        <div className="bgarea"  style = {{"max-width": "1120px"}}>
        <p className="beautify">Welcome to Fab Store, this page explains our terms of use. When you use the Fab Store, you’re 
        agreeing to all the rules on this page. Some of them need to be expressed in legal language, but we’ve done our best to 
        offer you clear and simple explanations of what everything means.</p>
        <h3>About Creating an Account</h3>
        <p className="beautify">To sign up for a Fab Store account, you need to be 18 or over. You’re responsible for your account and all the activity on it. You can browse Fab Store without registering for an account. But to use some of our features, you’ll need to register, choose a username, and set a password. When you do that, the information you give us has to be accurate and complete. Don’t impersonate anyone else or choose names that are offensive or that violate anyone’s rights. If you don’t follow these rules, we may cancel your account.
You’re responsible for all the activity on your account, and for keeping your password confidential. If you find out that someone has used your account without your permission, you should report it to support.fs@gmail.com.
To sign up for an account, you need to be at least 18 years old, or old enough to form a binding contract where you live. If necessary, we may ask you for proof of age.
</p> 
        <h3>Things that are big no-no’s</h3>
        <p className="beautify">Thousands of people use the Fab Store. We expect all of you to behave responsibly and help keep this a nice place. If you want be a part of this don’t do any of these things on our site:<br />
- Don’t break the law. Don’t take any action that infringes or violates other people’s rights, violates the law, or breaches any contract or legal duty you have toward anyone.<br />
- Don’t lie to people. Don’t post information you know is false, misleading, or inaccurate. Don’t do anything deceptive or fraudulent.<br />
- Don’t offer prohibited items. Don’t offer any rewards that are illegal, violate any of Fab Store's policies, rules, or guidelines, or violate any applicable law, statute, ordinance, or regulation.<br />
- Don’t victimize anyone. Don’t do anything threatening, abusive, harassing, defamatory, libelous, tortious, obscene, profane, or invasive of another person’s privacy.<br />
- Don’t spam. Don’t distribute unsolicited or unauthorized advertising or promotional material, or any junk mail, spam, or chain letters. Don’t run mail lists, listservs, or any kind of auto-responder or spam on or through the Site.<br />
- Don’t abuse other users’ personal information. When you use Fab Store — and especially if you create a successful store — you may receive information about other users, including things like their names, email addresses, and postal addresses. This information is provided for the purpose of participating in Fab Store: don’t use it for other purposes, and don’t abuse it.<br />
- Don't post anything that is - is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another’s privacy, tortious, obscene, vulgar, pornographic, offensive, profane, contains or depicts nudity, contains or depicts sexual activity, or is otherwise inappropriate as determined by us in our sole discretion.<br /></p> 
        <h3>Things we don’t do and are not responsible for</h3>
        <p className="beautify">Fab Store is not and should not be held liable for any damages or losses related 
        to your use of the Services. We don’t become involved in disputes between users, or between users and any third party 
        relating to the use of the Services. We don’t oversee the performance or punctuality of pages and contents, and we don’t 
        endorse any content users submit to the Site. When you use the Services, you release Fab Store from claims, damages, and 
        demands of every kind — known or unknown, suspected or unsuspected, disclosed or undisclosed — arising out of or in any 
        way related to such disputes and the Services. All content you access through the Services is at your own risk. You’re 
        solely responsible for any resulting damage or loss to any party.</p>
        <h3>About our fees</h3>
        <p className="beautify">
        Creating an account on Fab Store is free. If you create a store that is successfully supported, we (and our payment partners) collect fees. Our partners’ fees may vary slightly based on your location. Each payment provider is its own company, and Fab Store isn’t responsible for its performance. You’re responsible for paying any additional fees or taxes associated with your use of Fab Store. You will be paid your margins on Wednesday of every week if it is greater than Rs.100.
        </p>
        <h3>About other websites and links</h3>
        <p className="beautify">Fab Store may contain links to other websites. (For instance, user websites pages, user profiles, and comments that may link to other sites.) When you access third-party websites, you do so at your own risk. We don’t control or endorse those sites.
Fab Store partners with other companies (such as Cashfree) for payment processing. When you support or create a page, you’re also agreeing to the payment processor’s terms of service.
</p>
        <h3>Our Intellectual Property</h3>
        <p className="beautify">
        - Fab Store’s services, content and Marks, are legally protected in a number of ways, including pursuant to copyright, trademark, service marks, patent, trade secrets, and other U.S. and international intellectual-property laws.<br />
        - You agree to respect all copyright and other legal notices, information, and restrictions contained in any Fab Store Content, Services, or Marks accessed through the Site or the Services.<br />
        - You agree not to change, translate, or otherwise create derivative works of the Services.<br />
        - Fab Store grants you a limited license (that is temporary, non-exclusive, non-sub-licensable, and non-Transferable) to access and use User Content and Fab Store’s Content solely for use of the Services in accordance with these Terms.<br />
        - You may not reproduce, redistribute, transmit, assign, sell, broadcast, rent, share, lend, modify, adapt, edit, create derivative works of, license, or otherwise transfer or use any User Content or Fab Store Content unless We give you express written permission to do so.<br />
        - We reserve the right to revoke this limited license to access and use User Content and Fab Store Content at any time and in our sole discretion.<br />
        </p>
        <h3>Your intellectual property</h3>
        <p className="beautify">
        - Any royalties or licensing on your Content are your responsibility. You will pay all royalties and other amounts owed to any person or entity based on your Content, or on Fab Store’s hosting of that Content.<br />
        - You’re responsible for the stuff you post. All information submitted to the Site, whether publicly posted or privately transmitted, is the sole responsibility of the person from whom that content originated.<br />
        - We’re not responsible for mistakes in your content. Fab Store will not be liable for any errors or omissions in any content.<br />
        </p>
        <h3>Account deletion</h3>
        <p className="beautify">
        You may stop using our Service, by contacting Fab Store at support.fs@gmail.com, and requesting account deletion. We may 
        retain certain information as required by law or as necessary for our legitimate business purposes. All provisions of this 
        agreement survive termination of an account, including our rights regarding any content you’ve already submitted to the Site. 
        (For instance, if you’ve launched a page, deleting your account will not automatically remove the page from the Site.)
        </p>
        <h3>About indemnity</h3>
        <p className="beautify">
        You agree to defend, indemnify and hold harmless Fab Store, Our subsidiaries and affiliated companies, and Our officers, 
        directors, employees, partners, contractors, representatives, agents, and third party providers from and against any and 
        all claims, causes of action, damages, obligations, losses, liabilities, costs or debt, and expenses (including reasonable 
        attorneys' fees and costs) and all amounts paid in settlement arising from or relating to, breach of these Terms or violation 
        of any applicable laws. We reserve the right, in Our sole discretion and at Our own expense, to assume the exclusive defense 
        and control of any matter for which you have agreed to indemnify us and you agree to assist and cooperate with us as reasonably 
        required in the defense or settlement of any such matters.
        </p>
        <h3>About copyright</h3>
        <p className="beautify">
        The Digital Millennium Copyright Act lays out a system of legal requirements for dealing with allegations of copyright 
        infringement. Fab Store complies with the DMCA, and we respond to notices of alleged infringement if they comply with 
        the law and the requirements set forth in our Copyright Policy. We reserve the right to delete or disable content alleged 
        to be infringing, and to terminate accounts for repeat infringers. (We do this when appropriate and at our sole discretion.)</p>
        <h3>Agreement Between You and Us</h3>
        <p className="beautify">
        These Terms are the entire agreement between You and Fab Store with respect to the Services. They supersede all other 
        communications and proposals (whether oral, written, or electronic) between you and Fab Store with respect to the Services 
        and govern our relationship. If any provision of these Terms are deemed invalid by a court of competent jurisdiction, 
        the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall 
        remain in full force and effect. Fab Store's failure to assert any right or provision under this Agreement shall not 
        constitute a waiver of such right or provision.
        </p>
        <h3>Miscellaneous</h3>
        <p className="beautify">We may modify or discontinue the Services at any time, in our sole discretion. You agree that, 
        except as otherwise expressly provided in these Terms, there shall be no third-party beneficiaries to these Terms. No 
        waiver of any provision of these Terms shall be deemed a further or continuing waiver of such term or any other term, 
        and Fab Store’s failure to assert any right or provision under these Terms shall not constitute a waiver of such right 
        or provision. You agree that regardless of any statute or law to the contrary, any claim arising out of or related to 
        the Services must commence within one (1) year after the cause of action accrues. Otherwise, such cause of action is 
        permanently barred.
        </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
