<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\CreateImageController;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;


/**
 * @ORM\Entity(repositoryClass="App\Repository\ImageRepository")
 * @Vich\Uploadable
 */
#[ApiResource(
    formats: ['json' => [ 'application/json' ]],
    normalizationContext: ['groups' => ['media_object:read']],
    itemOperations: ['get'],
    collectionOperations: [
    'get',
    'post' => [
        'controller' => CreateImageController::class,
        'deserialize' => false,
        'validation_groups' => ['Default', 'media_object_create'],
        'openapi_context' => [
            'requestBody' => [
                'content' => [
                    'multipart/form-data' => [
                        'schema' => [
                            'type' => 'object',
                            'properties' => [
                                'fil' => [
                                    'type' => 'string',
                                    'format' => 'binary',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
]
)]
class Image
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @ORM\Id
     */
    private $id = null;


    public  $contentUrl = null;

    #[Groups(['media_object:read'])]
    public $success = 1;
    /**
     * @Vich\UploadableField(mapping="media_object", fileNameProperty="filePath")
     */
    #[Assert\NotNull(groups: ['media_object_create'])]
    public  $fil = null;
    #[Groups(['media_object:read'])]
    public $file = null;

    /**
     * @ORM\Column(nullable=true)
     */
    public  $filePath = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
