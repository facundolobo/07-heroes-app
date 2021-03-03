import { mount, shallow } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { HeroScreen } from "../../../components/heroes/HeroScreen"




describe('Pruebas en <HeroScreen/>', () => {

    const history={
        lenght:10, //es solo un entero
        push:jest.fn(), //son funciones
        goBack:jest.fn()
    }


    
    test('debe de mostrarce el componente redirect si no hay argumentos en el URL ', () => {
        const wrapper = mount( //porque debe usar 'useParams' que esta dentro de 'Route'
            
            //{/**agregamos solo el router */}
            <MemoryRouter initialEntries={['/hero']}>  {/*initialEntries objeto que vamos a definir con el url y los argumentos q necesito envierle */}
                <HeroScreen history={history}/> {/*necesita 'history'*/}
            </MemoryRouter>
        )

        expect(wrapper.find('Redirect').exists()).toBe(true);
        //como exise el componente redirect 
        //es porque no encontro un hero
    })

    test('debe de mostrar un hero si el párametro existe ', () => {
        const wrapper = mount( //porque debe usar 'useParams' que esta dentro de 'Route'
            
            //{/**agregamos solo el router */}
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>  {/*initialEntries objeto que vamos a definir con el url y los argumentos q necesito envierle */}
                <Route path="/hero/:heroeId" component={HeroScreen} /> {/*creamos una ruta ficticia, lo mismo q estaba en DashboardRoutes*/ }
            </MemoryRouter>
        )
        
        expect(wrapper.find('Redirect').exists()).toBe(false); //verificaqmos q no se active Redirect

        expect(wrapper.find('.row').exists()).toBe(true); //es el primer div de HeroScreen debe salir true


        //como exise el componente redirect 
        //es porque no encontro un hero
    })
    test('debe de regresar a la pantalla anterior con PUSH ', () => {
        
        const history={
            lenght:1, //es solo 1 para que active el PUSH   
            push:jest.fn(), //son funciones
            goBack:jest.fn()
        }

        const wrapper = mount( //porque debe usar 'useParams' que esta dentro de 'Route'
            
            //{/**agregamos solo el router */}
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>  {/*initialEntries objeto que vamos a definir con el url y los argumentos q necesito envierle */}
                <Route 
                    path="/hero/:heroeId" 
                    component={ (props) => <HeroScreen history={history} /> } /**enviamos el history de eta manera */
                /> {/*creamos una ruta ficticia, lo mismo q estaba en DashboardRoutes*/ }
            </MemoryRouter>
        )
        
        wrapper.find('button').prop('onClick')(); //activamos el boton

        expect(history.push).toHaveBeenCalledWith('/');//verificamos q se activo el push

        expect(history.goBack).toHaveBeenCalledTimes(0);//verificamos q no se activo el goBack
        //expect(history.goBack).not.toHaveBeenCalled();
   
    })

    test('Debe de regresarnos a la pantalla anterior GOBACK ', () => {
            
    
        const wrapper = mount( //porque debe usar 'useParams' que esta dentro de 'Route'
            
            //{/**agregamos solo el router */}
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>  {/*initialEntries objeto que vamos a definir con el url y los argumentos q necesito envierle */}
                <Route 
                    path="/hero/:heroeId" 
                    component={ (props) => <HeroScreen history={history} /> } /**enviamos el history de eta manera */
                /> {/*creamos una ruta ficticia, lo mismo q estaba en DashboardRoutes*/ }
            </MemoryRouter>
        )
        
        wrapper.find('button').prop('onClick')(); //activamos el boton

        expect(history.push).not.toHaveBeenCalled();//verificamos q se activo el push

        expect(history.goBack).toHaveBeenCalledTimes(1);
        //verificamos q no se activo el goBack
        //expect(history.goBack).not.toHaveBeenCalled();


    })
    test('debe de llamar redirect si el hero no existe ', () => {
        const wrapper = mount( //porque debe usar 'useParams' que esta dentro de 'Route'
            
        //{/**agregamos solo el router */}
        <MemoryRouter initialEntries={['/hero/marvel-spiderNOEXISTE']}>  {/*initialEntries objeto que vamos a definir con el url y los argumentos q necesito envierle */}
            <Route 
                path="/hero/:heroeId" 
                component={ (props) => <HeroScreen history={history} /> } /**enviamos el history de eta manera */
            /> {/*creamos una ruta ficticia, lo mismo q estaba en DashboardRoutes*/ }
        </MemoryRouter>
    )
    
        expect(wrapper.find('Redirect').exists()).toBe(false)

        expect(wrapper.text().trim()).toBe(''); //no devuelve nada
    })
    
    
})
