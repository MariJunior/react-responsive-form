import styled from '@emotion/styled';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { SignupForm } from '../src/content/signup-form';
import { signupFormConfig } from '../src/content/signup-form/data';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Amigoweb test task</title>
        <meta name="description" content="Responsive signup form with validation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Тестовое задание Amigoweb
        </Title>
        <SignupForm
          title='Регистрация'
          tip={<>Уже есть аккаунт? <a href='#'>Войти</a></>}
          formConfigData={signupFormConfig}
          submitButtonText='Зарегистрироваться'
        />
      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Logo>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Logo>
        </a>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 60px;
  font-size: 4rem;
  line-height: 1.15;
  text-align: center;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid var(--colors-lightgray);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;

export default Home;
