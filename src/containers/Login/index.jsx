import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles.js"
import { Button } from "../../components/Button/index.jsx"
import Logo from "../../assets/Logo.svg"
import { api } from "../../services/api.js"
import { toast } from 'react-toastify';
import {useNavigate } from "react-router-dom"


export function Login() {
    // const notify = () => toast.("Wow so easy!");
    const navigate = useNavigate()
    const schema = yup
        .object({
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo 6 caracteres').required('Digite uma senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    // console.log(errors)
    const onSubmit = async (data) => {
        const {data: {token}} = await toast.promise(
             api.post("/sessions", {
                email: data.email,
                password: data.password
            })
            , {
                pending: 'Verificando seus dados',
                success: {
                    render(){
                        setTimeout(() => {
                            navigate('/')
                        }, 2000);
                        return 'Login bem sucedido 👌'
                    }
                },
                error: 'Email ou senha incorretos 🤯'
            })

        localStorage.setItem("token", token)
    }

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo devburguer" />
                {/* <button onClick={notify}>Notify!</button> */}
                

            </LeftContainer>

            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha</span>.
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label htmlFor="">Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="">Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors.password?.message}</p>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p>
            </RightContainer>

        </Container>
    )
}
