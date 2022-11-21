import React, { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { ButtonDark } from "../../styles/components/Buttons"
import { DashNav, DashContainer, DashHeader, DashHeaderDiv, DashBorder, DashAddTech, DashTechList, DashTechListCard } from "./style"
import { FaPlus } from 'react-icons/fa'
import { FormTech } from "./FormTech"
import { ModalAdd } from "../../components/ModalAdd"
import { ModalPatch } from "../../components/ModalPatch"
import { FormTechPatch } from "./FormTechPatch"
import { ModalLoading } from "../../components/ModalLoading"

export const Dashboard = () => {
    const {navigate, user, setUser, toggleModalAdd, toggleModalPatch, identification, setIdentification} = useContext(UserContext)

    return (
        <DashContainer>
            <ModalLoading/>
            <DashNav>
                    <h1>Tech Hub</h1>
                    <ButtonDark onClick={() => {
                        setUser({})
                        localStorage.clear()

                        navigate("/")
                    }}>Logout</ButtonDark>
            </DashNav>
            <DashBorder></DashBorder>
            <DashHeader>
                    <DashHeaderDiv>
                        <h2> Olá, {user.name}</h2>
                        <h3>{user.course_module}</h3>
                    </DashHeaderDiv>
            </DashHeader>
            <DashBorder></DashBorder>
            <DashAddTech>
                    <h3>Tecnologias</h3>
                    <button className="button__addTech" onClick={() => toggleModalAdd()}><FaPlus/></button>
                    <ModalAdd>
                        <FormTech />
                    </ModalAdd>
            </DashAddTech>
    
            <DashTechList>
                {user.techs?.map((element) => (
                        <>
                            <DashTechListCard key={element.id} onClick={() => {
                                setIdentification(element.id)

                                toggleModalPatch()
                            }}>
                                <h3>{element.title}</h3>

                                <div>
                                    <span>{element.status}</span>
                                </div>
                            </DashTechListCard>
                        </>
                    )
                )}
                <ModalPatch>
                    {user.techs?.filter((filtered => filtered.id === identification)).map((element, index) => (
                        <FormTechPatch key={index} element={element}/>
                        ))}
                </ModalPatch>
                
            </DashTechList>
        </DashContainer>
    )
}