import Dropdown from '../../components/Dropdown.jsx';



function A_propos() {
    return (
        <> 
            A propos
            <Dropdown title='Fiabilité' content=<ul><li>test</li><li>test</li><li>test</li></ul> />
            <Dropdown title='Respect' content='test' />
            <Dropdown title='Service' content='test' />
            <Dropdown title='Responsabilité' content='test' />
            <Dropdown title='Sécurité' content='test' />
        </>
    )
}

export default A_propos
