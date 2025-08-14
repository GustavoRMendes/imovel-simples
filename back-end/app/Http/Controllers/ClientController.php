<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = Client::all();
        return response()->json($clients, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
    {
        $data = $request->validated();

        try {
            $client = Client::create($data);
            return response()->json($client, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao inserir cliente!'], 400);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $client = Client::findOrFail($id);
            return response()->json($client, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao buscar cliente!'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, string $id)
    {
        $data = $request->validated();

        try {
            $client = Client::findOrFail($id);
            $client->update($data);

            return response()->json($client, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao atualizar cliente!'], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
