@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <div class="panel panel-default">
                <div class="panel-heading" style="padding:10px 15px;font-size:20px;text-transform: uppercase;"><b>
                <?php //echo $name;?></b>
                <!-- @if (Auth::user()->name=="purva" || Auth::user()->name=="shifa" )
                                 <a href="{{ route('company_insert') }}" class="btn btn-primary" style="align:center;float:right">
                                   New Record
                                </a> -->
                @endif
                </div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                                        <table class="table">

                                    
                                            <?php  foreach( $users as $user) { ?>
                                            <!-- <tr>
                                                <td> <?php echo $user-> id;?></td>
                                                <td> <?php echo $user-> s_id;?></td>
                                                <td><?php echo $user-> q_type;?></td>
                                                <td><?php echo $user-> ques;?></td>
                                                <td><?php echo $user-> subpart;?></td>
                                                
                                                
                                            </tr>                           -->
                                           
                                            <tr>
                                                <?php if($user->q_type == "open_ended"){

                                                    ?><td>
                                                    <p><?php echo $user-> ques ?></p>
                                                    <input id="open_ended" placeholder="open Ended Question" type="text" class="form-control" name="open_ended" value="" required autofocus>
                                                    </td><?php

                                                }
                                                ?>
                                            </tr>
                                            <?php } ?>

                                        </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection


