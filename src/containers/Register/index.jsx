import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer,Link } from "./styles.js"
import { Button } from "../../components/Button/index.jsx"
import Logo from "../../assets/Logo.svg"
import { api } from "../../services/api.js"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"

export function Register() {
    // const notify = () => toast.("Wow so easy!");
    const navigate = useNavigate()
    const schema = yup
        .object({
            name: yup.string().required('Nome é obrigatório'),
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo 6 caracteres').required('Digite uma senha'),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('Confirme a senha')
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

        try {
            const {status} = await
            api.post("/users", {
                name: data.name,
                email: data.email,
                password: data.password
            },{
                validateStatus: () => true
            })
            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
                toast.success('Conta criada com sucesso')
            }else if(status === 400){
                toast.error('Email já cadastrado!')
            }else{
                throw new Error()
            }

        // console.log(status)
        } catch (error) {
            console.log(error)
            toast.error('Falha no sistema')
        }
        
    }

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo devburguer" />
                {/* <button onClick={notify}>Notify!</button> */}


            </LeftContainer>

            <RightContainer>
                <Title>
                    Criar conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label htmlFor="">Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors.name?.message}</p>
                    </InputContainer>
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
                    <InputContainer>
                        <label htmlFor="">Confirmar senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors.confirmPassword?.message}</p>
                    </InputContainer>
                    <Button type="submit">Confirmar cadastro</Button>
                </Form>
                <p>Ja possui conta? <Link to="/login">Clique aqui.</Link></p>
            </RightContainer>

        </Container>
    )
}
