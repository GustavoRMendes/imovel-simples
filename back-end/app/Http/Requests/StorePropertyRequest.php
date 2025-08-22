<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:255',
            'floor' => 'required|in:1,2',
            'status' => 'required|in:available,rented',
            'created_at' => 'nullable|date',
            'updated_at' => 'nullable|date',
        ];
    }
}
