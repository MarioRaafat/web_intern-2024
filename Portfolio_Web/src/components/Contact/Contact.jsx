import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {contact_pic} from "../../assets/index.js";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import "./Contact.css";
import {contact} from "../../constants/constants.js";
import { slideIn } from "../../utils/motion";


const Contact = () => {
  return (
      <div
          className={`contact-section`}
      >
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='bg-black-100 p-8 rounded-2xl w-full'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="contacts-container">
          {contact.map((contact, index) => (
                  <div key={index} className="contact-card" onClick={()=>{
                        window.open(contact.link, "_blank");
                  }}>
                      <img src={contact.icon} alt={contact.title} className="contact-icon"/>
                      <p className="contact-text">{contact.title}</p>
                  </div>
              )
          )}
        </div>
        </motion.div>

      </div>
  );
};

export default SectionWrapper(Contact, "contact");