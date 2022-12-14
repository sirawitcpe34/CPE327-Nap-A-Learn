import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Model, StylesManager } from "survey-core";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { Survey } from "survey-react-ui";
import Colour from "../../color/napalearncolor";
import Layout from "../../components/Layout";
import url from '../url'

StylesManager.applyTheme("defaultV2");

// data Questionnaire 2 and set label
const surveyJson = {
  completedHtml: "<img src=\"/image/accept.png\" class=\"imgcenter\" alt=\"Complete\"><div style=\"margin: 32px 0;\"><h3>คุณทำแบบคัดกรองบุคคลออทิสติกเสร็จเรียบร้อย</h3></div><div style=\"margin: 32px 0;\"><a  class=\"complete-button\" href=\"/question\">Back to Question Page</a></div><div style=\"margin: 16px 0;\"></div",
  elements: [
    {
      type: "boolean",
      name: "question-aa",
      title: "มีพฤติกรรมกระตุ้นตัวเอง ซึ่งเป็นพฤติกรรมซ้ํา ๆ เช่น สะบัดนิ้วมือ เล่นมือ ดม เคาะ หรือหมุนสิ่งของ เป็นต้น",
      label: "มีพฤติกรรมกระตุ้นตัวเอง ซึ่งเป็นพฤติกรรมซ้ํา ๆ เช่น สะบัดนิ้วมือ เล่นมือ ดม เคาะ หรือหมุนสิ่งของ เป็นต้น",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ab",
      title: "แสดงพฤติกรรมที่ไม่เหมาะสมเมื่อมีการเปลี่ยนแปลงกิจกรรมประจําวัน เช่น เด็กไม่ยอมเปลี่ยนเส้นทางการไปโรงเรียน เด็กไม่ยอมเปลี่ยน เก้าอี้นั่งในห้องเรียน เป็นต้น",
      label: "แสดงพฤติกรรมที่ไม่เหมาะสมเมื่อมีการเปลี่ยนแปลงกิจกรรมประจําวัน เช่น เด็กไม่ยอมเปลี่ยนเส้นทางการไปโรงเรียน เด็กไม่ยอมเปลี่ยน เก้าอี้นั่งในห้องเรียน เป็นต้น",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ac",
      title: "มีพฤติกรรมหลีกหนีการสัมผัส เช่น เดินเขย่งปลายเท้า ไม่ชอบการกอดรัด ทนต่อเสียงบางอย่างไม่ได้ เป็นต้น",
      label: "มีพฤติกรรมหลีกหนีการสัมผัส เช่น เดินเขย่งปลายเท้า ไม่ชอบการกอดรัด ทนต่อเสียงบางอย่างไม่ได้ เป็นต้น",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ad",
      title: "มีพฤติกรรมอยู่ไม่นิ่ง เช่น ชอบวิ่ง เดินไปมารอบห้อง เป็นต้น",
      label: "มีพฤติกรรมอยู่ไม่นิ่ง เช่น ชอบวิ่ง เดินไปมารอบห้อง เป็นต้น",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ae",
      title: "ไม่เข้าใจอารมณ์ของผู้อื่น เช่น ไม่เข้าใจเวลาเพื่อนโกรธ เศร้า เสียใจ เป็นต้น",
      label: "ไม่เข้าใจอารมณ์ของผู้อื่น เช่น ไม่เข้าใจเวลาเพื่อนโกรธ เศร้า เสียใจ เป็นต้น",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-af",
      title: "แสดงความต้องการโดยการจูงมือ เช่น เด็กจะจูงมือผู้ปกครอง / ครู เพื่อนําไปทําสิ่งที่ต้องการ เป็นต้น",
      label: "แสดงความต้องการโดยการจูงมือ เช่น เด็กจะจูงมือผู้ปกครอง / ครู เพื่อนําไปทําสิ่งที่ต้องการ เป็นต้น",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ag",
      title: "ใช้ภาษาพูดของตนเองที่ผู้อื่นไม่เข้าใจ",
      label: "ใช้ภาษาพูดของตนเองที่ผู้อื่นไม่เข้าใจ",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ah",
      title: "พูดเลียนแบบ หรือพูดทวนคําถาม",
      label: "พูดเลียนแบบ หรือพูดทวนคําถาม",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ai",
      title: "พูดคําซ้ําๆ ที่เคยได้ยินบ่อย เช่น พูดตามโฆษณาที่ได้ยินจากโทรทัศน์",
      label: "พูดคําซ้ําๆ ที่เคยได้ยินบ่อย เช่น พูดตามโฆษณาที่ได้ยินจากโทรทัศน์",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-aj",
      title: "ไม่สามารถเริ่มต้นบทสนทนากับผู้อื่นได้",
      label: "ไม่สามารถเริ่มต้นบทสนทนากับผู้อื่นได้",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ak",
      title: "พูดเรื่องที่ตนเองสนใจโดยไม่สนใจผู้ฟัง",
      label: "พูดเรื่องที่ตนเองสนใจโดยไม่สนใจผู้ฟัง",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-al",
      title: "ไม่เข้าใจคําที่เป็นนามธรรม เช่น การเอื้อเฟื้อเผื่อแผ่",
      label: "ไม่เข้าใจคําที่เป็นนามธรรม เช่น การเอื้อเฟื้อเผื่อแผ่",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-am",
      title: "ไม่มองสบตากับผู้อื่นขณะสนทนา",
      label: "ไม่มองสบตากับผู้อื่นขณะสนทนา",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-an",
      title: "ไม่มีปฏิสัมพันธ์กับบุคคลรอบข้าง เช่น ไม่เล่นกับเพื่อน ไม่สนใจคนรอบข้าง เป็นต้น",
      label: "ไม่มีปฏิสัมพันธ์กับบุคคลรอบข้าง เช่น ไม่เล่นกับเพื่อน ไม่สนใจคนรอบข้าง เป็นต้น",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ao",
      title: "มีปฏิสัมพันธ์ต่อบุคคลรอบข้างไม่เหมาะสม เช่น เล่นกับเพื่อนแรงn",
      label: "มีปฏิสัมพันธ์ต่อบุคคลรอบข้างไม่เหมาะสม เช่น เล่นกับเพื่อนแรง",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ap",
      title: "แสดงพฤติกรรมการตอบสนองทางอารมณ์ และสังคมไม่เหมาะสม เช่น ส่งเสียงกรีดร้อง ทําร้ายตนเองหรือผู้อื่นเมื่อถูกขัดใจ เป็นต้น",
      label: "แสดงพฤติกรรมการตอบสนองทางอารมณ์ และสังคมไม่เหมาะสม เช่น ส่งเสียงกรีดร้อง ทําร้ายตนเองหรือผู้อื่นเมื่อถูกขัดใจ เป็นต้น",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-aq",
      title: "แยกตัวออกมาอยู่ตามลําพัง เช่น ในขณะที่เพื่อนทํากิจกรรมกลุ่มไม่ยอมเข้าร่วมกิจกรรม",
      label: "แยกตัวออกมาอยู่ตามลําพัง เช่น ในขณะที่เพื่อนทํากิจกรรมกลุ่มไม่ยอมเข้าร่วมกิจกรรม",
      labelTrue: "ใช่",
      labelFalse: "ไม่ใช่",
      requiredErrorText: "กรุณาตอบคำถามในข้อนี้",
      isRequired: true
    },
    {
      type: "boolean",
      name: "question-ar",
      title: "ไม่สามารถปฏิบัติตามกฎกติกา ระเบียบหรือข้อตกลงได้ เช่น ไม่รู้จักการรอคอย ไม่รู้จักการเข้าแถว เป็นต้น",
      label: "ไม่สามารถปฏิบัติตามกฎกติกา ระเบียบหรือข้อตกลงได้ เช่น ไม่รู้จักการรอคอย ไม่รู้จักการเข้าแถว เป็นต้น",
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

    {/* add answer question 2*/ }
    axios.post(`${url}/api/Question/addQuestion2`, {
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
            <Heading size='xl'>แบบคัดกรองบุคคลออทิสติก</Heading>
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