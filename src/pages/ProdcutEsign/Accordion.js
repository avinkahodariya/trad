import React, { useState } from "react";
import Table from "./Table";
import TechnicalDetails from "./TechnicalDetails";

const accordion = [
  {
    id: 0,
    num: "01",
    title: "How this works?",
    description:
      "A person who wishes to sign his documents digitally needs to buy a digital signature ID from certifying agencies. At present ‘SAFESCRYPT’ and ‘TCS’ provide digital signatures in India to individuals who wish to do so. So in an organization, directors and other officers who wishes to sign documents digitally, should obtain digital signature ID. Once a digital signature ID is received he needs to install the same on his computer(s) from where he would be endorsing the signatures to the documents. Once installed, he can use various software(s) to sign his documents.",
    paragraph:
      "For example, once the ID is installed on his machine, he can configure his outlook to send all/selective mails being forwarded from his particular mail account to be digitally signed.",
  },
  {
    id: 1,
    num: "02",
    title: "Working with Back office software",
    description:
      "Most of the documents that are forwarded to clients / business associates are generated from one software or the other. The back office software may be in position to generate file that may be individually signed using software, but in doing so the entire purpose of the digital signature is defeated as there is manual intervention before it is signed and may be tempered before being signed unless the person who is supposed to sign generates the file himself. So you will appreciate that there should be a total end to end product that does everything seamlessly and not leave any room for miscreants and flaws.",
    paragraph:
      "The back office software will not even send the mail to outlook express, from where it has to wait for connection before being forwarded. Back office software will forward them directly to outgoing server i.e. beyond a point of access.",
  },
  {
    id: 2,
    num: "03",
    title: "Working without Back office software?",
    description:
      "If the documents you wish to forward are not generate from software other than software provided by us, i.e. developed by some other vendor, still you can use our digital signature module, the module also provides an option to load files generated by any other software or for that matter generated manually. A complete log of import activity is recorded along with user name, date, time, location from where loaded etc.",
    paragraph:
      "A connection into your database or data entry is possible to update and maintain e-mail addresses of clients. ",
  },
  {
    id: 3,
    num: "04",
    title: "How do digital IDs work?",
    description:
      "A digital ID is composed of a “public key,” a “private key,” and a “digital signature.” When you digitally sign your document, you are adding your digital signature and public key to the document. The combination of a digital signature and public key is called a “certificate.” Using various application software, you can sign a document / mail.",
    paragraph:
      "There is another aspect to digitally signing the document and that is encrypting the message. To send encrypted messages, your address book must contain digital IDs for the recipients. That way, you can use their public keys to encrypt the messages. When a recipient gets an encrypted message, their private key is used to decrypt the message for reading.",
  },
  {
    id: 4,
    num: "05",
    title: "Where do you get digital IDs?",
    description:
      "Digital IDs are issued by certification authorities. When you apply for a digital ID at a certification authority's Web site, they verify your identity before issuing an ID. There are different classes of digital IDs, each certifying to a different level of trustworthiness. For more information, logon to www.safescrypt.com",
  },
  {
    id: 5,
    num: "06",
    title: "How do you verify a digital signature?",
    description:
      "With “revocation checking,” you can verify the validity of a digitally signed message. When you make such a check, Outlook Express requests information on the digital ID from the appropriate certification authority. The certification authority sends back information on the status of the digital ID, including whether the ID has been revoked. Certification authorities keep track of certificates that have been revoked due to loss or termination.",
  },
  {
    id: 6,
    num: "07",
    title: "Approaches",
    description:
      "There are two basic approaches of digitally signing the documents, both are described below with their respective advantages and limitations. Acer’s back office software can forward documents using both the methods at discretion of the client.",
  },
  {
    id: 7,
    num: "08",
    title: "Digitally signed message (E-Mail)",
    description:
      "In this approach, outgoing messages are digitally signed. The recipient will get digital signature as attachment to the mail. If he is using mail manager like outlook express or Netscape for incoming mails, he will be able to view a symbol of digitally signed message and from properties he can view details of person signing the message. The advantage of digitally signing the message is that the recipient can very easily make out the digital signature and can also preserve the mail by saving the mail. He does not require any verifier to verify the authenticity of the signature and he can also check for revocation.",
    paragraph:
      "The limitation to this approach is that if the recipient is not using mail manager like Outlook or Netscape, he may see the signature as attachment and has almost no means to check the authenticity of the signature.",
  },
  {
    id: 8,
    num: "09",
    title: "Digitally signed documents files",
    description:
      "In this approach, the document can be digitally signed and the signature details are stored in a separate file. Both document and the file together make a digitally signed document. Both the files may be sent to the recipient to form a valid digitally signed document. The files may be bundled in a zip file and forwarded to the recipient by the back office application so in a way for the user it hardly matters. The advantage of forwarding digitally signed document is that any type document file can be digitally signed. For the matter it may be ·DOC, ·XLS, ·HTM, ·TXT file or for that matter even data files like ·DBF, ·MDB etc. Another advantage of the method is that the files being bundled in zip can be forwarded to someone else via mail or copying it on a floppy etc. The limitation with this method is that the recipient would require some utility to verify the authenticity of the signatures. This may be provided by the sender on his website.",
  },
];

function Accordion() {
  const [howThisWork, setHowThisWork] = useState(false);
  const [listData, setListData] = useState(accordion);
  const [button, setbutton] = useState(true);

  const showData = (item) => {
    let updatedData = listData.map((isItem) =>
      isItem.id === item.id
        ? { ...isItem, selected: item.selected ? false : true }
        : { ...isItem, selected: false }
    );
    setListData(updatedData);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto ">
          {console.log("listData", listData)}
          {listData.map((value, index) => (
            <>
              <div className=" rounded-xl h-30 mx-auto mb-10 mt-0 bg-gradient-to-r p-[1.5px] from-[#0080F6]  via-[#05C876]  to-[#6EE7B7] ">
                <div className="flex justify-between items-center h-full bg-white text-white rounded-lg text-center">
                  <div
                    id="accordion-collapse"
                    data-accordion="collapse"
                    className="w-full"
                  >
                    <h2 id="accordion-collapse-heading-1">
                      <button
                        type="button"
                        className="flex justify-between items-center pl-3 w-full font-medium text-left rounded-t-xl border border-b-sm border-gray-200  "
                        data-accordion-target="#accordion-collapse-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-1"
                      >
                        <span className="text-[#0A2A4A] text-xl dark:text-gray-400">
                          {value.title}
                        </span>
                        {button && value.selected ? (
                          <svg
                            onClick={() => {
                              showData(value);
                              setbutton(false);
                            }}xmlns="http://www.w3.org/2000/svg"
                            width="72"
                            height="72"
                            fill="#3491FF"
                            class="bi bi-dash-circle-fill"
                            viewBox="0 0 30 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                          </svg>
                            
                        ) : (
                          <svg
                            onClick={() => {
                              setbutton(true);
                              showData(value);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="72"
                            height="72"
                            fill="#3491FF"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 30 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        )}
                      </button>
                    </h2>
                    {value.selected && index == value.id && (
                      <div
                        id="accordion-collapse-body-1 "
                        className=""
                        aria-labelledby="accordion-collapse-heading-1"
                      >
                        <div
                          className="p-5 border border-b-2 rounded-b-xl
     border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                        >
                          <p className="mb-2 text-[#808D9A] dark:text-gray-400 text-left">
                            {value.description}
                          </p>
                          <p className="text-[#808D9A] dark:text-gray-400 text-left pt-4">
                            {value.paragraph}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {index === 1 && <Table />}
              {index === 2 && <TechnicalDetails />}
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Accordion;
