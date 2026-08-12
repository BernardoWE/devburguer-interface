import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer } from "./styles"
import { Button } from "../../components/Button/index.jsx"
import Logo from "../../assets/Logo.svg"
import { api } from "../../services/api.js"

export function Login() {

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

    console.log(errors)
    const onSubmit = async (data) => {
        const response = await api.post("/session",{
            email: data.email,
            password: data.password
        })
        console.log(response)
    }
    
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo devburguer" />


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
                <p>Não possui conta? <a href="#">Clique aqui.</a></p>
            </RightContainer>

        </Container>
    )
}
