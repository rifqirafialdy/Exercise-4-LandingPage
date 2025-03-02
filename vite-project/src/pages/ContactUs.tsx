import { FC } from "react"
import Header from "../components/header";
import Profile from "../components/profile";
import styled from "styled-components";
import Footer from "../components/footer";
import Form from "../components/form";
const ContactUs:FC=()=>{
    const ContentSection= styled.section`
        margin-top: 160px;
        margin-left: 88px;
        margin-bottom: 100px;
        margin-right: 82px;
        display: flex;
    `
    return(
        <div>
<Header/>
<ContentSection>

<Profile/>
<Form/>
</ContentSection>
<Footer/>
        </div>
    )
}
export default ContactUs;