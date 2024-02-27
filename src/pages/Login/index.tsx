import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { LoginContainer, LoginEmailWrapper, LoginForm, LoginPasswordWrapper } from './styles'

import Image from 'next/image'
import LoginMain from './styles'
import { Input } from '@/components/Input'
import LoginImage from '../../../public/4005030.jpg'

interface ILoginForm extends FormEvent<HTMLFormElement> {}

const Login = () => {
    const [registration, setRegistration] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState('')
    const router = useRouter()

  //SUPERVISOR TÉCNICO

    useEffect(() => {

    }, [])


    return (
        <>
        <header>
        <title>Login - Controle CSAT</title>
        </header>
        
        <LoginMain>
			<LoginContainer>
				<LoginForm>
					<div>
						<h1>Controle CSAT</h1>
						<h4>Login</h4>
					</div>
					<LoginEmailWrapper>
						<Input label='Nome Completo' required/>
					</LoginEmailWrapper>

					<LoginPasswordWrapper>
						<Input label='E-mail' required/>
					</LoginPasswordWrapper>

					<button>Entrar</button>
				</LoginForm>
				<div className='image'>
					<Image 
						src={LoginImage}
						alt='Login Image'
						width={500}
						height={500}
					/>
				</div>
			</LoginContainer>
        </LoginMain>
        </>
    )
}

export default Login