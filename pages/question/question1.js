import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import Head from "next/head";
import { React, useCallback, useEffect, useState } from "react";
import { Model, StylesManager } from "survey-core";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { Survey } from "survey-react-ui";
import Colour from "../../color/napalearncolor";
import Layout from "../../components/Layout";
import url from '../url';

StylesManager.applyTheme("defaultV2");

// data Questionnaire 1 and set label
const surveyJson = {
  completedHtml: "<img src=\"/image/accept.png\" class=\"imgcenter\" alt=\"Complete\"><div style=\"margin: 32px 0;\"><h3>คุณทำแบบคัดกรองบุคคลที่มีความบกพร่องทางสติปัญญาเสร็จเรียบร้อย</h3></div><div style=\"margin: 32px 0;\"><a  class=\"complete-button\" href=\"/question\">Back to Question Page</a></div><div style=\"margin: 16px 0;\"></div",
  elements: [
    {
      type: "boolean",
      name: "question-aa",
      title: "ใช้ภาษาไม่สมวัย",
      label: "ใช้ภาษาไม่สมวัย",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ab",
      title: "ไม่เข้าใจคําสั่ง ไม่สามารถทําตามคําสั่งได้",
      label: "ไม่เข้าใจคําสั่ง ไม่สามารถทําตามคําสั่งได้",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ac",
      title: "ไม่สามารถ หรือสามารถดูแลตัวเองในชีวิตประจําวันได้น้อยในการรับประทานอาหาร / การอาบน้ํา / แปรงฟัน / การแต่งกาย",
      label: "ไม่สามารถ หรือสามารถดูแลตัวเองในชีวิตประจําวันได้น้อยในการรับประทานอาหาร / การอาบน้ํา / แปรงฟัน / การแต่งกาย",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ad",
      title: "ไม่สามารถทําความสะอาดหลังการขับถ่าย",
      label: "ไม่สามารถทําความสะอาดหลังการขับถ่าย",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ae",
      title: "ต้องกระตุ้นในการปฏิบัติกิจวัตรประจําวันอยู่เสมอ",
      label: "ต้องกระตุ้นในการปฏิบัติกิจวัตรประจําวันอยู่เสมอ",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-af",
      title: "ช่วยเหลือตนเองในชีวิตประจําวันได้ต่ํากว่าวัย",
      label: "ช่วยเหลือตนเองในชีวิตประจําวันได้ต่ํากว่าวัย",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ag",
      title: "ชอบเล่นกับเด็กที่มีอายุน้อยกว่า หรือไม่สามารถเล่นกับเพื่อนตามวัย",
      label: "ชอบเล่นกับเด็กที่มีอายุน้อยกว่า หรือไม่สามารถเล่นกับเพื่อนตามวัย",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ah",
      title: "เล่นเลียนแบบผู้อื่นอย่างไม่เหมาะสมกับวัย",
      label: "เล่นเลียนแบบผู้อื่นอย่างไม่เหมาะสมกับวัย",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ai",
      title: "มีปัญหาด้านพฤติกรรมในการใช้สิ่งของสาธารณะประโยชน์ เช่น ชอบทําลายหรือใช้อย่างไม่ระมัดระวัง",
      label: "มีปัญหาด้านพฤติกรรมในการใช้สิ่งของสาธารณะประโยชน์ เช่น ชอบทําลายหรือใช้อย่างไม่ระมัดระวัง",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-aj",
      title: "ไม่รู้จักวิธีการใช้ การจัดเก็บ และการดูแลรักษา ของส่วนรวม",
      label: "ไม่รู้จักวิธีการใช้ การจัดเก็บ และการดูแลรักษา ของส่วนรวม",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ak",
      title: "เอาแต่ใจตนเอง มีอารมณ์โกรธ ฉุนเฉียวบ่อย ๆ",
      label: "เอาแต่ใจตนเอง มีอารมณ์โกรธ ฉุนเฉียวบ่อย ๆ",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-al",
      title: "ไม่สามารถควบคุมตนเองทําตามสิ่งที่ต้องทํา",
      label: "ไม่สามารถควบคุมตนเองทําตามสิ่งที่ต้องทํา",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-am",
      title: "ลืมง่าย / จําในสิ่งที่เรียนมาแล้วไม่ได้",
      label: "ลืมง่าย / จําในสิ่งที่เรียนมาแล้วไม่ได้",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-an",
      title: "ไม่สามารถนําทักษะที่เรียนรู้ไปแก้ไขปัญหาเฉพาะหน้าได้",
      label: "ไม่สามารถนําทักษะที่เรียนรู้ไปแก้ไขปัญหาเฉพาะหน้าได้",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ao",
      title: "ช่วงความสนใจสั้น ไม่สามารถรับผิดชอบงานที่ต้องทํา",
      label: "ช่วงความสนใจสั้น ไม่สามารถรับผิดชอบงานที่ต้องทํา",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ap",
      title: "ทําตามคําสั่งต่อเนื่อง 2 คําสั่งขึ้นไปได้ยาก สับสนง่าย",
      label: "ทําตามคําสั่งต่อเนื่อง 2 คําสั่งขึ้นไปได้ยาก สับสนง่าย",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-aq",
      title: "สนใจสิ่งรอบตัวน้อย",
      label: "สนใจสิ่งรอบตัวน้อย",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ar",
      title: "ใช้เวลาว่างแสดงพฤติกรรมที่ไม่เหมาะสม",
      label: "ใช้เวลาว่างแสดงพฤติกรรมที่ไม่เหมาะสม",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-as",
      title: "ดูแลสุขภาพตนเองได้น้อย เช่น ล้างมือไม่เป็น หรือไม่รู้จักรับประทานอาหารที่เป็นประโยชน์",
      label: "ดูแลสุขภาพตนเองได้น้อย เช่น ล้างมือไม่เป็น หรือไม่รู้จักรับประทานอาหารที่เป็นประโยชน์",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-at",
      title: "มีความระมัดระวังเรื่องความปลอดภัยตนเองน้อย",
      label: "มีความระมัดระวังเรื่องความปลอดภัยตนเองน้อย",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
  ]
};

export default () => {
  let line = {
    width: '100%',
    marginTop: '12px',
    height: '2px',
    bgColor: Colour.Darkblue
  }
  let boxquestion = {
    bgColor: Colour.White,
    width: '80%',
    minWidth: '400px',
    marginTop: '24px',
    padding: '24px',
  }
  let Footer = {
    width: '100%',
    marginTop: '24px',
  }

  const [hasMounted, setHasMounted] = useState(false);
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    //alert(results);
    console.log(sender.data);
    const ordered = Object.keys(sender.data).sort().reduce(
      (obj, key) => {
        obj[key] = sender.data[key];
        return obj;
      },
      {}
    );
    const answer = Object.values(ordered)

    {/* add answer question 1*/ }
    axios.post(`${url}/api/Question/addQuestion1`, {
      answer: answer,
      userID: sessionStorage.getItem('usernumberID')
    }).then((response) => {
      console.log(response.data)
    }).catch(err => console.log(err))
  }, []);

  survey.onComplete.add(alertResults);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  else {
    return (
      <div className="">
        <Head>
          <title>Nap A Learn Website</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/pro.ico" />
        </Head>
        <Layout>
          <div className="p-4 mt-1">
            <Heading size='xl'>แบบคัดกรองบุคคลที่มีความบกพร่องทางด้านสติปัญญา</Heading>
            <Box sx={line}></Box>
            <VStack spacing={8}>
              <Box sx={boxquestion} boxShadow='lg' p='6' rounded='md'>
                <Text align="left" fontSize='xl' as='u'>คำชี้แจง</Text>
                <Text align="left">1. แบบคัดกรองฉบับนี้เป็นแบบคัดกรองเพื่อประโยชน์ในทางการจัดการศึกษาเท่านั้น</Text>
                <Text align="left">2. วิเคราะห์ลักษณะ/พฤติกรรม ซึ่งเป็นลักษณะหรือพฤติกรรมที่แสดงออกบ่อย ๆ โดยให้ทําเครื่องหมาย / ลงในช่อง “ ใช่ ” หรือ “ ไม่ใช่ ” ที่ตรงกับลักษณะหรือพฤติกรรมนั้น ๆ ของตัวเองหรือผู้ถูกประเมิน</Text>
              </Box>
              <Box sx={boxquestion} boxShadow='lg' p='6' rounded='md'>
                {/* show questionnaire */}
                <Survey model={survey} />
              </Box>
            </VStack>
            <Box sx={Footer}></Box>
          </div>
        </Layout>
      </div>
    );
  }
}