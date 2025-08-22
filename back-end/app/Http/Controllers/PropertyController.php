<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePropertyRequest;
use Illuminate\Http\Request;
use App\Models\Property;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $properties = Property::all();
        return response()->json($properties, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePropertyRequest $request)
    {
        $data = $request->validated();

        try {
            $property = Property::create($data);
            return response()->json([
                'message' => 'Imóvel inserido com sucesso!',
                'data' => $property
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao inserir imóvel!'], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $property = Property::findOrFail($id);
            return response()->json($property, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao buscar imóvel!'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StorePropertyRequest $request, string $id)
    {
        $data = $request->validated();

        try {
            $property = Property::findOrFail($id);
            $property->update($data);

            return response()->json([
                'message' => 'Imóvel atualizado com sucesso!',
                'data' => $property
            ], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Imóvel não encontrado!'], 404);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao atualizar imóvel!'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $property = Property::findOrFail($id);
            $property->delete();
            return response()->json(['message' => 'Imóvel removido com sucesso!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao remover imóvel!'], 404);
        }
    }
}
