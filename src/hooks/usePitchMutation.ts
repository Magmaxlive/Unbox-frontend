'use client';

import React from 'react'
import { useMutation } from '@tanstack/react-query'
import type { PitchFormData } from '@/lib/schemas/pitch_schema'

interface PitchResponse {
    success : boolean;
    message : string;
}

function usePitchMutation() {
  return useMutation<PitchResponse,Error,PitchFormData> ({
    mutationFn: async (data) =>{
        const response = await fetch ('/api/contact',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data),
        });

        const result : PitchResponse = await response.json()

        if (!response.ok) {
            throw new Error(result.message || 'Failed to send message');
        }

        return result;
    }
  })
}

export default usePitchMutation
