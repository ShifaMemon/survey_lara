<?php

namespace App\Http\Controllers;
use App\questions;

use Illuminate\Http\Request;

class ShowAnswers extends Controller
{
    public function AnswerDetail()
    {
        $users = questions::get();
        $data['users']=$users;
        return view('answers.AddAnswer',$data);
       
    }
    
}
