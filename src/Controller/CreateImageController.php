<?php

namespace App\Controller;

use App\Entity\Image;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;

#[AsController]
class CreateImageController extends AbstractController
{

    public function __invoke(Request $request)
    {
        $uploadedFile = $request->files->get('image');
        if (!$uploadedFile) {
            throw new BadRequestHttpException( json_encode(($request)));
        }

        $mediaObject = new Image();
        $mediaObject->fil = $uploadedFile;
        $mediaObject->file = ["url" => '/img/'.$uploadedFile->getClientOriginalName()];

        return $mediaObject;
    }


}
