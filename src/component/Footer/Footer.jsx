// import CodeIcon from "@mui/icons-material/Code";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <>
//       <div className="footer">
//         <div className="container">
//           <div className="row">
//             <div className="footer-col">
//                 <CodeIcon
//                   sx={{
//                     display: { xs: "block", md: "flex" },
//                     mr: 1,
//                     fontSize: "30px",
//                   }}
//                 />
//               <h3>
//                 Being Developer
//               </h3>
//               <br />
//               <p>
//                 One Stop Solution for learning <br /> Web Development and
//                 coding.
//               </p>
//             </div>
//             <div className="footer-col">
//               <h3>COMPANY</h3>
//               <ul>
//                 <li>About</li>
//                 <li>Courses</li>
//                 <li>Contact</li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h3>SERVICES</h3>
//               <ul>
//                 <li>Privacy Policies</li>
//                 <li>Term of Use</li>
//                 <li>Refund</li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <div>
//                 <h3>GET IN TOUCH</h3>
//                 <h4 className="Email">Email: support@BeingDeveloper.com</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

import CodeIcon from "@mui/icons-material/Code";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h2>
                <CodeIcon
                  sx={{
                    // display: { xs: "none", md: "flex" },
                    // mr: 1,
                    fontSize: "30px",
                    dispaly: { md: "inline" },
                  }}
                />
                Being Developer
              </h2>
              <p>
                One Stop Solution for learning <br /> Web Development and
                coding.
              </p>
            </div>
            <div className="footer-col">
              <h3>COMPANY</h3>
              <ul>
                <li>About</li>
                <li>Courses</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>SERVICES</h3>
              <ul>
                <li>Privacy Policies</li>
                <li>Term of Use</li>
                <li>Refund</li>
              </ul>
            </div>
            <div className="footer-col">
              <div>
                <h3>GET IN TOUCH</h3>
                <h4 className="Email">Email: support@BeingDeveloper.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
