import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { SearchScreen } from "../../../components/search/SearchScreen"

describe('Pruebas en <SearchScreen/>', () => {
    
 
    test('debe de mostrarce correctamente con valores por defecto', () => {
       
        const wrapper= mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route  path="/search" component={SearchScreen} />
            </MemoryRouter>
        )
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
            
    })
    test('debe mostrar a batman y el input con el valor de queryString', () => {
        const wrapper= mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>{/**agregamos la direccion  */}
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar un error si no se encuentra el Hero ', () => {
        const wrapper= mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>{/**agregamos la direccion  */}
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )
        //expect(wrapper.find('input').prop('value')).toBe('batman123');
        expect(wrapper.find('.alert-danger').text().trim()).toBe('there is no a Hero with batman123');
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de llamarel push del history ', () => {
        const history={
            push:jest.fn()
        }
        const wrapper= mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>{/**agregamos la direccion  */}
                <Route 
                    path="/search" 
                    component={()=> <SearchScreen history={history} /> } />
            </MemoryRouter>
        )
        
        //cambiar el valor del input
        wrapper.find('input').simulate('change',{
            target: {
                name:'searchText',
                value:'batman'

            }
        });

        //simulamos el onSubmit
        wrapper.find('form').prop('onSubmit')( { preventDefault(){} } ); 
        //devo enviar el evento preventDefault

        //verificamos si push se utilizo 
        expect(history.push).toHaveBeenCalledWith('?q=batman')
    })
    
    
    
})

