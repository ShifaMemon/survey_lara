<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\survey;
use App\employees;
class SurveyController extends Controller
{
    public function surveyDetail($id)
    {

        $detail = employees ::with('company.surveys')->find($id);
        $response = [];
        $response['status'] = true;
        $response['data'] = $detail;
        return response()->json($response);
    }

    public function survey_id($id)
    {
        $survey = survey::with('company')->find($id);
        $response = [];
        $response['status'] = true;
        $response['data'] = $survey;
        return response()->json($response);
    }
}
