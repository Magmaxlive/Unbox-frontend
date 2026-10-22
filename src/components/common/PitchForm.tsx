'use client';
import React from 'react'
import { useForm } from '@tanstack/react-form';
import { pitchSchema } from '@/lib/schemas/pitch_schema';
import type { PitchFormData } from '@/lib/schemas/pitch_schema';
import usePitchMutation from '@/hooks/usePitchMutation';
import { Form } from 'lucide-react';

const initialValues:PitchFormData = {
    name:'',
    email:'',
    topic:'Politics',
    story:''
}

const topics = ['Politics','Community','Food','Fashion','Tech','World','Other'] as const;

function PitchForm() {
    const pitchMutation = usePitchMutation()

    const form = useForm({
        defaultValues:initialValues,
        validators:{
            onSubmit: pitchSchema
        },

        onSubmit: async ({value}) =>{
            await pitchMutation.mutateAsync(value);
            form.reset();
        }
    })
  return (
    <div className='bg-violet p-8 h-fit'>
      <form 
       onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        form.handleSubmit();
       }}
       className='flex flex-col gap-6'
       >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form.Field name='name' >
                {(field)=>(
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-semibold text-xs uppercase text-white ">
                            your name
                        </label>

                        <input
                            id='name'
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e)=>field.handleChange(e.target.value)}
                            className='w-full bg-white border-violet px-4 py-3 outline-none focus:border-white'
                            placeholder='Enter your name'
                        />
                        {field.state.meta.errors.map((error,i)=>(
                            <p key={i} className="text-sm text-red-500">
                                {typeof error === 'string' ? error : error?.message}
                            </p>
                        ))}
                    </div>
                )}
            </form.Field>

             <form.Field name='email' >
                {(field)=>(
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-semibold text-xs uppercase text-white ">
                            your email
                        </label>

                        <input
                            id='email'
                            type='email'
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e)=>field.handleChange(e.target.value)}
                            className='w-full bg-white border-violet px-4 py-3 outline-none focus:border-white'
                            placeholder='Enter your email address'
                        />
                        {field.state.meta.errors.map((error,i)=>(
                            <p key={i} className="text-sm text-red-500">
                                {typeof error === 'string' ? error : error?.message}
                            </p>
                        ))}
                    </div>
                )}
            </form.Field>
        </div>

        <form.Field name='topic'>
            {(field)=>(
               <div className="flex flex-col gap-3">
                 <label htmlFor="topic" className="font-semibold uppercase text-white text-xs">
                    topic
                </label>

                <div className="flex gap-4 flex-wrap">
                    {topics.map((topic) => {
                        const isSelected = field.state.value == topic
                        return(
                            <label key={topic} htmlFor={topic} className="cursor-pointer">
                            <input
                                type='radio'
                                id={topic}
                                name={field.name}
                                value={topic}
                                checked={isSelected}
                                onChange={()=> field.handleChange(topic)}
                                onBlur={field.handleBlur}
                                className='peer sr-only'
                            />

                            <span className={`block border-2 px-3 py-2 text-xs font-bold capitalize trasition-colors 
                            ${
                                field.state.value === topic
                                ? 'border-volt bg-volt text-black'
                                : 'border-violet-300 text-white hover:bg-violet-500'
                            }`}>
                                {topic}
                            </span>
                        </label>
                        )
                        
                    })}

                    {field.state.meta.errors.length > 0 && (
                    <p className="text-sm text-red-400" role="alert">
                    {field.state.meta.errors
                        .map((error) =>
                        typeof error === 'string' ? error : error?.message
                        )
                        .join(', ')}
                    </p>
                )}
                </div>
               </div>
               
            )}
        </form.Field>

        <form.Field name='story'>
            {(field)=>(
                <div className="flex flex-col gap-3">
                    <label htmlFor="story" className="font-semibold uppercase text-white text-xs">
                    The story in a few lines
                    </label>

                    <textarea
                        name={field.name}
                        id='story'
                        value={field.state.value}
                        onChange={(e)=>field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        className='w-full bg-white border-violet px-4 py-3 outline-none focus:border-white'
                        placeholder='Enter your story'

                    />

                    {field.state.meta.errors.map((error,i)=>(
                        <p key={i} className='text-red-500 text-sm '>
                            {typeof error === 'string' ? error : error?.message}
                        </p>
                    ))}
                </div>
            )}

        </form.Field>

        <button type="submit" className='w-full bg-volt px-4 py-3 font-heading cursor-pointer tracking-widest text-sm uppercase'>send my pitch</button>

        

      </form>
    </div>
  )
}

export default PitchForm
