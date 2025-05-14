import { Button, CircularProgress, TextField } from "@mui/material";
import { Alert, Snackbar } from "@mui/material";
import Fade from "@mui/material/Fade";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [err, setErr] = useState(false);
  const form = useRef();
  const handleClose = () => {
    setIsSent(false);
    setErr(false);
  };
  const submitForm = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm("service_5xmiddl", "template_i72w7xn", form.current, {
        publicKey: "k_HYhHakJYm7opIk2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErr(true);
        }
      );
    setIsSending(false);
    setName("");
    setEmail("");
    setNumber("");
    setMsg("");
    setSubject("");
  };

  return (
    <div className="px-10">
      <form onSubmit={submitForm} ref={form}>
        <h2 className="text-5xl">Let's connect</h2>
        <div className="flex py-5">
          <TextField
            label="Email"
            variant="outlined"
            required
            name="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
            sx={{
              paddingRight: "1rem",
              "& label": {
                color: "#FFF", // Label color
              },
              "& label.Mui-focused": {
                color: "#FFF", // Label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF", // Default border
                },
                "&:hover fieldset": {
                  borderColor: "#FFF", // Hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF", // Focused border
                },
              },
              input: {
                color: "#FFF", // Text color
              },
            }}
          />
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            name="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            sx={{
              "& label": {
                color: "#FFF", // Label color
              },
              "& label.Mui-focused": {
                color: "#FFF", // Label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF", // Default border
                },
                "&:hover fieldset": {
                  borderColor: "#FFF", // Hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF", // Focused border
                },
              },
              input: {
                color: "#FFF", // Text color
              },
            }}
          />
        </div>
        <div className="flex pb-5">
          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            required
            name="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            sx={{
              paddingRight: "1rem",
              "& label": {
                color: "#FFF", // Label color
              },
              "& label.Mui-focused": {
                color: "#FFF", // Label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF", // Default border
                },
                "&:hover fieldset": {
                  borderColor: "#FFF", // Hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF", // Focused border
                },
              },
              input: {
                color: "#FFF", // Text color
              },
            }}
          />
          <TextField
            label="Mobile number"
            variant="outlined"
            fullWidth
            value={number}
            name="Number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            sx={{
              "& label": {
                color: "#FFF", // Label color
              },
              "& label.Mui-focused": {
                color: "#FFF", // Label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF", // Default border
                },
                "&:hover fieldset": {
                  borderColor: "#FFF", // Hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF", // Focused border
                },
              },
              input: {
                color: "#FFF", // Text color
              },
            }}
          />
        </div>
        <textarea
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          label="Message"
          name="Message"
          placeholder="Message here..."
          size="large"
          style={{
            width: "100%",
            height: "10rem",
            border: "2px solid #DDD",
            borderRadius: "0.5rem",
            fontSize: "1.25rem",
            padding: ".5rem",
          }}
        ></textarea>
        <Button
          type="submit"
          sx={{
            padding: "0.75rem",
            marginTop: "1rem",
            fontSize: "1rem",
            fontWeight: "500",
            width: "100%",
            bgcolor: "#222",
            "&:hover": {
              bgcolor: "#333",
            },
          }}
          variant="contained"
        >
          {isSending ? (
            <CircularProgress size={30} thickness={5} color="white" />
          ) : (
            "Send"
          )}
        </Button>
        <Snackbar
          TransitionComponent={Fade}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isSent}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success" variant="filled">
            Message Sent , We will catch you back soon .
          </Alert>
        </Snackbar>
        {/* {err && ( */}
        <Snackbar
          TransitionComponent={Fade}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={err}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" variant="filled">
            Error sending your message. Try again later.
          </Alert>
        </Snackbar>
      </form>
      <br />
      <h3 className="text-white text-[2rem] mt-7 mb-5 max-lg:mt-5 max-lg:mb-2">
        Contact details
      </h3>
      <div className="flex max-lg:flex-col">
        <div className="h-50  max-lg:h-max flex items-center">
          <LocationOnIcon sx={{ fontSize: "4rem", marginRight: "0.35rem" }} />
          <p className="text-xl max-lg:text-[1rem]">
            <span className="font-bold">
              National Institute of Technology Tiruchirappalli,
            </span>
            Tanjore Main Road, NH67, near BHEL, Tiruchirappalli, Tamil Nadu
            620015
          </p>
        </div>
        <div className=" w-[100%] h-50  flex flex-col justify-center">
          <div className=" w-[50%]  flex items-center ">
            <PhoneIcon sx={{ fontSize: "3rem", marginRight: "1rem" }} />
            <p className="text-xl max-lg:text-[1rem]">
              <span className="font-bold">Johan</span>
              <br />
              99999999
            </p>
          </div>
          <div className=" flex items-center">
            <EmailIcon sx={{ fontSize: "3rem", marginRight: "1rem" }} />
            <p className="text-xl max-lg:text-[1rem]">
              <span className="font-bold">orbitnitt@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
