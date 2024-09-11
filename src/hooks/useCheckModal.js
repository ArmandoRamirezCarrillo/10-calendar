import { addHours, differenceInSeconds } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import { useCalendarStore } from './useCalendarStore';
import { useUiStore } from './useUiStore';

export const useCheckModal = () => {
    const {activeEvent, startSavingEvent} = useCalendarStore();
    const {closeDateModal} = useUiStore();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(),2),
    })

    const titleClass = useMemo(() => {
        if(!formSubmitted) return ''
        return(formValues.title.length > 0) ? '' : 'is-invalid';
    }, [formValues.title, formSubmitted])

    useEffect(() => {
      if(activeEvent !== null){
        setFormValues({...activeEvent})
      }
    }, [activeEvent])
    

    const onInputChange = ({target}) =>{
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChange = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onSubmit = async(event) => {
        event.preventDefault();
        setFormSubmitted(true);
        const difference = differenceInSeconds(formValues.end, formValues.start);
        if(isNaN(difference) || difference <= 0){
            Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error')
            return;
        }
        if(formValues.title.length <= 0) return;
            console.log(formValues);

        await startSavingEvent(formValues);
        closeDateModal();
        setFormSubmitted(false);
    }

    return {
        onSubmit,formValues, onDateChange, titleClass, onInputChange
    }
}