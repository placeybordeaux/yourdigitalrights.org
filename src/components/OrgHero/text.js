import { FormattedMessage } from "react-intl";
import styles from "./styles";

export const MoreInfo = (
  <FormattedMessage
    id="moreInfo"
    defaultMessage="To find out more about the process read our {faq}. To find out more about this service read our {about} page."
    values={{ 
    	faq: <a target="_blank" href="/#faq">Frequently Asked Questions</a>,
    	about: <a target="_blank" href="/about">About</a>,
    }}
  />
);

export const NewOrgTitle = (
  <FormattedMessage
    id="newOrgTitle"
    defaultMessage="Delete or Access My Personal Data"
  />
);
