<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateClientRequest extends FormRequest
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
        $userId = $this->route()->parameter('cliente');

        return [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:clients,email,' . $userId,
            'cpf' => 'required|unique:clients,cpf,' . $userId,
            'number' => 'required',
            'sex' => 'required',
            'birth_date' => 'nullable|date|before:today',
            'status' => 'required',
            'created_at' => 'nullable|date',
            'updated_at' => 'nullable|date',
        ];
    }
}
